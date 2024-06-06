const PocketBase = require('pocketbase');

const client = new PocketBase(process.env.POCKETBASE_URL);

module.exports = client;
