const CustomDex = artifacts.require("CustomDex.sol");

module.exports = function(deployer) {
  deployer.deploy(CustomDex);
};
