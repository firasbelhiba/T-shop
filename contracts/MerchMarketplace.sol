// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MerchMarketPlace {
    enum State {
        Purchased,
        Activated,
        Desactivated
    }

    struct Merch {
        uint256 id; // 32
        uint256 price; // 32
        bytes32 zkproof; // 32
        address owner; // 20
        State state; // 1
    }

    // Mapping of merchHash to merchData
    mapping(bytes32 => Merch) private ownedMerch;

    // Mapping of merchId to merchHash
    mapping(uint256 => bytes32) private ownedMerchHash;

    uint256 private totalOwnedMerch;

    function purchaseMerch(bytes16 merchId, bytes32 zkproof) external payable {
        bytes32 merchHash = keccak256(abi.encodePacked(merchId, msg.sender , block.timestamp));
        uint256 id = totalOwnedMerch++;
        ownedMerchHash[id] = merchHash;
        ownedMerch[merchHash] = Merch({
            id: id,
            price: msg.value,
            zkproof: zkproof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function getMerchCount() external view returns (uint256) {
        return totalOwnedMerch;
    }

    function getMerchHashByIndex(uint256 index)
        external
        view
        returns (bytes32)
    {
        return ownedMerchHash[index];
    }

    function getMerchByHash(bytes32 merchHash)
        external
        view
        returns (Merch memory)
    {
        return ownedMerch[merchHash];
    }
}
