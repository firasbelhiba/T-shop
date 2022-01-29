const MerchMarketPlaceMigration = artifacts.require("MerchMarketPlace");

module.exports = function (deployer) {
  deployer.deploy(MerchMarketPlaceMigration);
};
