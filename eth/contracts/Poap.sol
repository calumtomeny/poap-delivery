pragma solidity ^0.5.17;

// Minimal POAP contract implementation
// Needed for the main contract
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Poap is ERC721 {
    event EventToken(uint256 eventId, uint256 tokenId);

    // Last Used id (used to generate new ids)
    uint256 private lastId;

    // EventId for each token
    mapping(uint256 => uint256) private _tokenEvent;

    /**
     * @dev Function to mint tokens
     * @param eventId EventId for the new token
     * @param tokenId The token id to mint.
     * @param to The address that will receive the minted tokens.
     * @return A boolean that indicates if the operation was successful.
     */
    function _mintToken(uint256 eventId, uint256 tokenId, address to) internal returns (bool) {
        _mint(to, tokenId);
        _tokenEvent[tokenId] = eventId;
        emit EventToken(eventId, tokenId);
        return true;
    }

    /**
     * @dev Function to mint tokens
     * @param eventId EventId for the new token
     * @param to The address that will receive the minted tokens.
     * @return A boolean that indicates if the operation was successful.
     */
    function mintToken(uint256 eventId, address to) public returns (bool) {
        lastId += 1;
        return _mintToken(eventId, lastId, to);
    }
}
