let client = require('../db-connection');
let collection = client.db().collection('Dog');

const getAllCards = async () => {
  return await collection.find().toArray();
};

const insertCard = async (card) => {
  return await collection.insertOne(card); // insert data into database
};

module.exports = { getAllCards, insertCard };