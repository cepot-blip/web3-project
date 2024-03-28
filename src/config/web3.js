const {Web3} = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const env = require('dotenv');
env.config();

const mnemonic = process.env.MNEMONIC_SECRET_KEY;
const infuraApiKey = process.env.INFURA_API_KEY;

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic
  },
  providerOrUrl: `https://mainnet.infura.io/v3/${infuraApiKey}`
});

const web3 = new Web3(provider);

module.exports = web3;
