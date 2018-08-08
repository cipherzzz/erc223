const BalanceContract = artifacts.require("./BalanceContract.sol");
const SafeContract = artifacts.require("./SafeContract.sol");
const UnsafeContract = artifacts.require("./UnsafeContract.sol");

module.exports = async function(deployer) {
  await deployer.deploy(BalanceContract)
  await BalanceContract.deployed()

  await deployer.deploy(SafeContract)
  await SafeContract.deployed()

  await deployer.deploy(UnsafeContract)
  await UnsafeContract.deployed()
};
