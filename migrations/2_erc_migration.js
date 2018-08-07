const MyERC223 = artifacts.require("./MyERC223.sol");
const MyERC20 = artifacts.require("./MyERC20.sol");

module.exports = async function(deployer) {
  await deployer.deploy(MyERC223, "MyERC223", "MyERC223", 18)
  await MyERC223.deployed()

  await deployer.deploy(MyERC20, "MyERC20", "MyERC20", 18)
  await MyERC20.deployed()
};
