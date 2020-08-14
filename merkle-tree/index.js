'use strict';

const fs = require('fs');
const ethers = require('ethers');



class MerkleTree {
  constructor (file = './addresses.json') {
    this.pathToFile = file;
    this.receivers = JSON.parse(fs.readFileSync(this.pathToFile));
    this.leaves = this.getLeaves();
    this.layers = this.getLayers(this.leaves);
  }

  hash(index, address, events) {
    return ethers.utils.solidityKeccak256(["uint256", "address", "uint256[]"], [index, address, events]);
  }

  expandLeaves() {
    let addresses = Object.keys(this.receivers);
    addresses.sort(function(a, b) {
      let al = a.toLowerCase(), bl = b.toLowerCase();
      if (al < bl) { return -1; }
      if (al > bl) { return 1; }
      return 0;
    });

    return addresses.map((a, i) => { return { address: a, events: this.receivers[a], index: i }; });
  }

  getLeaves() {
    let leaves = this.expandLeaves(this.receivers);
    let _hash = this.hash;
    return leaves.map(function(leaf) {
      return _hash(leaf.index, leaf.address, leaf.events);
    });
  }

  getLayers (elements) {
    if (elements.length === 0) {
      return [['']];
    }

    const layers = [];
    layers.push(elements);

    // Get next layer until we reach the root
    // Ask if the last element of layers has more than one element
    let ctr = 0;
    while (layers[layers.length - 1].length > 1) {
      // Send the last layer
      let nextLayer = this.getNextLayer(layers[layers.length - 1]);
      layers.push(nextLayer);
      ctr += 1;
    }

    return layers;
  }

  getNextLayer(leaves) {
    let layer = [];
    let elements = [...leaves];
    while (elements.length) {
      let left = elements.shift();
      if (elements.length > 0) {
        let right = elements.shift();
        let params = left < right ? [left, right] : [right, left];
        layer.push(ethers.utils.solidityKeccak256(["bytes32", "bytes32"], params));
        // console.log('left: ', left, ' - right: ', right)
      } else {
        layer.push(left);
        // console.log('left: ', left)
      }
    }
    return layer;
  }

  getRoot() {
    return this.layers[this.layers.length - 1][0];
  }

  getProof(index) {
    if (index > this.receivers.length - 1) {
      throw new Error('Element does not exist in Merkle tree');
    }

    return this.layers.reduce((proof, layer) => {
      const pairElement = this.getPairElement(index, layer);

      if (pairElement) {
        proof.push(pairElement);
      }

      index = Math.floor(index / 2);

      return proof;
    }, []);
  }

  getPairElement (idx, layer) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;

    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      return null;
    }
  }

}

module.exports = {
  MerkleTree,
};
