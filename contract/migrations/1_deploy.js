const CustomDex = artifacts.require('CustomDex')
module.exports = function (deployer) {
  deployer.deploy(CustomDex)
}
