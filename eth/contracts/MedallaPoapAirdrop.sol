// Built by @ragonzal - 2020
pragma solidity ^0.5.17;

contract MedallaPoapAirdrop {
    bytes32 public constant _rootHash = 0xbef4d009a47a6cc9b50d45db864c757443d115f31e6568c94e17d5adec2fc840;

    function initialLeaf(uint256 index, address recipient, uint256[] memory events) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(index, recipient, events));
    }

    function verify(uint256 index, address recipient, uint256[] memory events, bytes32[] memory merkleProofs) public pure returns (bool) {

        // Compute the merkle root
        bytes32 node = initialLeaf(index, recipient, events);
        for (uint16 i = 0; i < merkleProofs.length; i++) {
            bytes32 proofElement = merkleProofs[i];
            if (proofElement < node) {
                node = keccak256(abi.encodePacked(proofElement, node));
            } else {
                node = keccak256(abi.encodePacked(node, proofElement));
            }
        }

        // Check the merkle proof
        return node == _rootHash;
    }

    function testKeccak(bytes32 left, bytes32 right) public pure returns (bytes32) {
        return  keccak256(abi.encodePacked(left, right));
    }

}
