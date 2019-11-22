const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

function initDb() {
  // Set some defaults (required if your JSON file is empty)
  db.defaults({ followers: [] }).write();
}

initDb();

export default db;
