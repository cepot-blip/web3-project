const web3 = require('../../config/web3');

exports.createTransaction = async (req, res) => {
  try {
    const { from, to, value } = await req.body;
    const accounts = await web3.eth.getAccounts();
    const tx = await web3.eth.sendTransaction({
      from: accounts[from],
      to,
      value: web3.utils.toWei(value, 'ether')
    });
    res.json(tx);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};
