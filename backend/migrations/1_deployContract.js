const contrato1 = artifacts.require("CarbonCoin");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(contrato1);

  };