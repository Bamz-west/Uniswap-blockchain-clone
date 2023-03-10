require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/uxY_NV2fnoFkSv1Hxl1Se-WmRxPzI-v_",
      accounts: [ "721e8e1cb10f411ac05f027f7cfe5c623c716a31f51ef5cee6407b68760427b8" ] // metamask private key
    }
  }
};
