const express = require('express');
const { createTransaction } = require('../controllers/Transaction/createTransaction');
const { getTransaction } = require('../controllers/Transaction/getTransaction');
const { transferToken } = require('../controllers/Token/transferToken');

const api_router = express.Router();

api_router.post('/transactions', createTransaction);
api_router.get('/transactions/:hash', getTransaction);
api_router.post('/token/transfer', transferToken);

module.exports = api_router;
