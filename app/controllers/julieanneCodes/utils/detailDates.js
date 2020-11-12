const { domain, port } = require('../../../../config.js').mongodb;
const { vacationDates } = require('./vacation-dates');
const mongo = require('mongodb').MongoClient;
const url = `mongodb://${domain}:${port}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};
mongo.connect(url, options, function(err, db) {
  if (err) throw err;
  const dbo = db.db('lit-course');
  dbo.collection('vacationDetail').insertMany(vacationDates, function(err, res) {
    if (err) throw err;
    db.close();
  });
});
