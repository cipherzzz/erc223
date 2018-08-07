pragma solidity ^0.4.23;

import "../node_modules/zeppelin-solidity/contracts/ownership/HasNoTokens.sol";

contract SafeContract is HasNoTokens{
    address owner;
    address public from;
    uint public value;
    bytes data;
    constructor () public {
        owner = msg.sender;
    }
}