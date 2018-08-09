
# The ERC-223 Evolution



**Disclaimer**:* I use the term ERC-223 very lightly. There is no consensus from the community as to whether the EIP will ever see the light of day.* *That being said, it is a good exercise to think through the problem it attempts to solve and lend your voice to the discussion.*

*Full project source is available* — [here](https://github.com/cipherzzz/erc223)

Ethereum has had its share of disasters regarding the loss of tokens as have most of the blockchain projects in the crypto space. Some of these losses have been sophisticated attacks on smart contracts and some token holders have simply sent their tokens to the wrong address. If you sent your ERC20 tokens to someone by mistake and they were in a good mood, you may get them back. If you sent them to a smart contract address, you can kiss them goodbye. They are gone. The ERC223 EIP request is currently under review by the Ethereum team that can be found [here](https://github.com/ethereum/EIPs/issues/223).

<iframe src="https://medium.com/media/d3eb15375a8a9e001c0b300f303dca06" frameborder=0></iframe>

### Purpose of this article

This article will attempt to create an ERC-223 in its simplest useful form using the [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721) implementation of an ERC-20 token and implementing the suggested ERC-223 methods. We will also be creating tests to illustrate the usage of the ‘fallback’ method on which the ERC-223 spec relies in order to fully illustrate the usage of this in practice.

### Setup the project

Make sure that you have node, npm and truffle installed

    mkdir erc223 && cd erc223 && truffle init

Replace the *truffle.js* content with the following:

<iframe src="https://medium.com/media/f3ef2f3c60d4dac9bad5fe59ae3f8564" frameborder=0></iframe>

Install [Ganache](http://truffleframework.com/ganache/) and make sure it is running on 8545

Compile and Migrate

    truffle compile
    truffle migrate

Init the folder as an npm project

    npm init

Install zeppelin dependency

    npm install zeppelin-solidity

### The Tokens

Add the following to /contracts as *MyERC223.sol*

<iframe src="https://medium.com/media/ffd68412f54d1756768599901d172774" frameborder=0></iframe>

Add the following to /contracts as *ERC223ReceivingContract.sol . *This is the interface that our erc223-compliant smart contracts must adhere to.

<iframe src="https://medium.com/media/6fcd6f7f9479b5637ec3936f2c5337ba" frameborder=0></iframe>

Add the following to /contracts as *MyERC20.sol . *Note that this is for us to test the ERC20 token recovery function of the zeppelin contract, *HasNoTokens.sol*

<iframe src="https://medium.com/media/09e6b865f4c597588b3c0620145dcae3" frameborder=0></iframe>

Add the following migration to /migrations as *2_erc_migration.js*

<iframe src="https://medium.com/media/1d54769e7adfa4609c0df37a9b5ccd07" frameborder=0></iframe>

### The Contracts

Add the following to /contracts as *BalanceContract.sol*

<iframe src="https://medium.com/media/ae28910ae24fff5071c767e44805214b" frameborder=0></iframe>

Add the following to /contracts as *SafeContract.sol*

<iframe src="https://medium.com/media/829b5442f6a56a01d34c7d6406d4c0e0" frameborder=0></iframe>

Add the following to /contracts as *UnsafeContract.sol*

<iframe src="https://medium.com/media/f48f1eb07021fd0b681cc764a8d01b67" frameborder=0></iframe>

<iframe src="https://medium.com/media/e6aa15c2b28c1faf14a3a0cd033eaba9" frameborder=0></iframe>

Add the following migration to /migrations as 3*_contract_migration.js*

<iframe src="https://medium.com/media/e6aa15c2b28c1faf14a3a0cd033eaba9" frameborder=0></iframe>

**Compile and Migrate**

Run the compile script and verify that it compiles without errors

    Marks-MacBook-Pro:erc223 markmathis$ truffle compile

Run the migrate script and verify that it deploys without errors

    Marks-MacBook-Pro:erc223 markmathis$ truffle migrate

### Test it out

Install test libraries

    npm install chai --save-dev
    npm install chai-as-promised --save-dev
    npm install babel-preset-es2015 --save-dev
    npm install babel-register --save-dev
    npm install babel-polyfill --save-dev

Add *.babelrc *to project root

    {
      "presets": ["es2015"]
    }

Add *erc223.spec.js* to /test

<iframe src="https://medium.com/media/87011dbf67f4437f666cf941fec38dd3" frameborder=0></iframe>

Run the test from the project root

    truffle test

![](https://cdn-images-1.medium.com/max/4304/1*C4CcFIO0ctlEJ5w6nmWIpg.png)

## **What’s happening…**

<iframe src="https://medium.com/media/bd4bccf051e020454e4754f092f5a1ce" frameborder=0></iframe>

The above tests ensure the following:

* ERC223 tokens cannot be transferred to a contract address that does not implement the fallback method defined in *ERC223ReceivingContract.sol*

* ERC223 tokens cannot be transferred to a contract address that implements the *HasNoTokens.sol *zeppelin contract

* ERC223 tokens can be transferred to a contract that correctly implements the fallback method defined in *ERC223ReceivingContract.sol *in the case that the contract does in fact support a balance.

* ERC20 tokens sent to a contract that implements the *HasNoTokens.sol *zeppelin contract can be retrieved by the OWNER OF THE CONTRACT. Note that if you send your ERC20 tokens to one of these contracts the OWNER can request to retrieve the tokens to their account and then distribute back to you if you are so lucky.

### Additional Resources
[**Dexaran/ERC223-token-standard**
*ERC223-token-standard - ERC223 token standard reference implementation.*github.com](https://github.com/Dexaran/ERC223-token-standard)
[**Create your own Ethereum token (Part 2: ERC223)**
*Part 1: ERC20 Token*medium.com](https://medium.com/@Nico_Vergauwen/create-your-own-ethereum-token-part-2-erc223-3076f764cf62)

*Full project source is available* — [here](https://github.com/cipherzzz/erc223)
