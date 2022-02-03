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

    bool public isStopped = false;

    // Mapping of merchHash to merchData
    mapping(bytes32 => Merch) private ownedMerch;

    // Mapping of merchId to merchHash
    mapping(uint256 => bytes32) private ownedMerchHash;

    uint256 private totalOwnedMerch;

    address payable private owner;

    constructor() {
        setContractOwner(msg.sender);
    }

    // Only access for owner
    error OnlyOwner();

    modifier onlyOwner() {
        if (msg.sender != getContractOwner()) {
            revert OnlyOwner();
        }
        _;
    }

    modifier onlyWhenNotStopped() {
        require(!isStopped);
        _;
    }

    modifier onlyWhenIsStopped() {
        require(isStopped);
        _;
    }

    function stopContract() external onlyOwner {
        isStopped = true;
    }

    function resumeContract() external onlyOwner {
        isStopped = false;
    }

    receive() external payable {}

    function withdrawEther(uint256 amount) external onlyOwner {
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Transfer of Ether to owner has failed.");
    }

    function superEmergencyWithdrawEther()
        external
        onlyWhenIsStopped
        onlyOwner
    {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Transfer of Ether to owner has failed.");
    }

    function selfDestruct() external onlyWhenIsStopped onlyOwner {
        selfdestruct(owner);
    }

    function purchaseMerch(bytes16 merchId, bytes32 zkproof)
        external
        payable
        onlyWhenNotStopped
    {
        bytes32 merchHash = keccak256(abi.encodePacked(merchId, msg.sender));
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

    function transferOwnership(address newOwner) external onlyOwner {
        setContractOwner(newOwner);
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

    function getContractOwner() public view returns (address) {
        return owner;
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
    }
}
