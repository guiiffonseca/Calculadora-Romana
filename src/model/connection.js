const { MongoClient } = require("mongodb");

const URL = 'mongodb://127.0.0.1:27017'
const DB_NAME = 'RomanCalculator';
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    })
};

module.exports = connection;