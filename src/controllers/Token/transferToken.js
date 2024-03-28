const web3 = require('../../config/web3');
const TokenABI = require("../../contracts/tokenABI");

exports.transferToken = async (req, res) => {
  try {
    const { from, to, amount, tokenAddress } = req.body;
    const tokenContract = new web3.eth.Contract(TokenABI, tokenAddress);
    const accounts = await web3.eth.getAccounts();
    const tx = await tokenContract.methods.transfer(to, amount).send({ from: accounts[from] });
    res.json(tx);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to transfer token' });
  }
};
