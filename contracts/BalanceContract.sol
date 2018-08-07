pragma solidity ^0.4.23;

import "./ERC223ReceivingContract.sol";

contract BalanceContract is ERC223ReceivingContract{
    address owner;
    address public from;
    uint public value;
    bytes data;
    constructor () public {
        owner = msg.sender;
    }

    function tokenFallback(address _from, uint _value, bytes _data) public {
        from = _from;
        value = _value;
        data = _data;
    }
}