const { mongoConnect } = require('../../../mongo.config.js');

exports.getDates = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'vacationDetail' });

  if (mongo.client) {
    mongo.collection.find().limit(50).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};
