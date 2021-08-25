const { v4: uuidv4 } = require('uuid');
const { getTransaction, saveTransaction } = require('../utils/file');

exports.findAll = () => {
  return getTransaction();
};

exports.findById = async id => {
  const transactions = await getTransaction();
  return transactions.find(el => el.id === id) ?? null;
};

exports.save = async data => {
  const transactions = await getTransaction();
  const transaction = { id: uuidv4(), ...data };
  transactions.push(transaction);
  await saveTransaction(transactions);
  return transaction;
};
