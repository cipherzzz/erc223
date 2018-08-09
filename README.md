
# The ERC-223 Evolution


**Disclaimer**:* I use the term ERC-223 very lightly. There is no consensus from the community as to whether the EIP will ever see the light of day.* *That being said, it is a good exercise to think through the problem it attempts to solve and lend your voice to the discussion.*


### Purpose of this project

This article will attempt to create an ERC-223 in its simplest useful form using the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721) implementation of an ERC-20 token and implementing the suggested ERC-223 methods. We will also be creating tests to illustrate the usage of the ‘fallback’ method on which the ERC-223 spec relies in order to fully illustrate the usage of this in practice.

Refer to this [article](https://medium.com/coinmonks/the-erc-223-evolution-eec0ef23e5cc)

### Setup and run the project

Make sure that you have node, npm, and truffle installed

Install [Ganache](http://truffleframework.com/ganache/) and make sure it is running on 8545

    npm i -g truffle
    git clone https://github.com/cipherzzz/erc223
    npm i
    truffle compile
    truffle migrate
    truffle test    