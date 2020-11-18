/* eslint-disable import/no-extraneous-dependencies */
require('@nomiclabs/hardhat-truffle5');
require('hardhat-spdx-license-identifier');
require('hardhat-gas-reporter');

task('balance', 'Prints an account\'s balance')
  .addParam('account', 'The account\'s address')
  .setAction(async taskArgs => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, 'ether'), 'ETH');
  });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.7.3',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  spdxLicenseIdentifier: {
    overwrite: true,
    runOnCompile: true,
  },
  gasReporter: {
    currency: 'GBP',
    gasPrice: 21,
    enabled: !!(process.env.REPORT_GAS),
    coinmarketcap: process.env.API_KEY_CMC,
  },
};
