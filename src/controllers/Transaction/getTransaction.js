const web3 = require('../../config/web3');

exports.getTransaction = async (req, res) => {
  try {
    const { hash } = req.params;
    const tx = await web3.eth.getTransaction(hash);
    res.json(tx);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get transaction' });
  }
};
