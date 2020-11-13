const { domain, port } = require('./config.js').mongodb;

const mongo = require('mongodb').MongoClient;
const url = `mongodb://${domain}:${port}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};

module.exports = {
  mongo: require('mongodb').MongoClient,
  url: `mongodb://${domain}:${port}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  },
  db: 'lit-course',
  collection: ''
};

exports.mongoConnect = async (refs = {
  db: 'lit-course',
  collection: 'lit-data'
}) => {
  return mongo.connect(url, options).then(client => {
    const collection = client.db(refs.db).collection(refs.collection);
    return { client, collection };
  }).catch(error => {
    return { error };
  });
};
