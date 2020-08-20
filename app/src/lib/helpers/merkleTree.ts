import ethers from 'ethers';

// Type
import { AddressData } from 'lib/types';
type LeafProps = {
  index: number;
  address: string;
  events: number[];
};

class MerkleTree {
  receivers: AddressData;
  leaves: string[];
  layers: string[][];

  constructor(addresses: AddressData) {
    this.receivers = addresses;
    this.leaves = this.getLeaves();
    this.layers = this.getLayers(this.leaves);
  }

  hash(index: number, address: string, events: number[]): string {
    return ethers.utils.solidityKeccak256(
      ['uint256', 'address', 'uint256[]'],
      [index, address, events],
    );
  }

  expandLeaves(): LeafProps[] {
    let addresses = Object.keys(this.receivers);
    addresses.sort(function (a, b) {
      let al = a.toLowerCase(),
        bl = b.toLowerCase();
      if (al < bl) {
        return -1;
      }
      if (al > bl) {
        return 1;
      }
      return 0;
    });

    return addresses.map((a, i) => {
      return { address: a, events: this.receivers[a], index: i };
    });
  }

  getLeaves(): string[] {
    let leaves = this.expandLeaves();
    let _hash = this.hash;
    return leaves.map(function (leaf) {
      return _hash(leaf.index, leaf.address, leaf.events);
    });
  }

  getLayers(elements): string[][] {
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

  getNextLayer(leaves): string[] {
    let layer = [];
    let elements = [...leaves];
    while (elements.length) {
      let left = elements.shift();
      if (elements.length > 0) {
        let right = elements.shift();
        let params = left < right ? [left, right] : [right, left];
        layer.push(ethers.utils.solidityKeccak256(['bytes32', 'bytes32'], params));
      } else {
        layer.push(left);
      }
    }
    return layer;
  }

  getRoot(): string {
    return this.layers[this.layers.length - 1][0];
  }

  getProof(index): string[] {
    if (index > Object.keys(this.receivers).length - 1) {
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

  getPairElement(idx, layer): string | null {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;

    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      return null;
    }
  }
}

export default MerkleTree;
