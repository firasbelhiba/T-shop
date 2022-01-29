// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MerchMarketPlace {
    enum State {
        Purchased,
        Activated,
        Desactivated
    }

    struct Merch {
        uint id;
        uint price;
        bytes32 zkproof;
        address owner; 
        State state;
    }
}
