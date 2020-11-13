const { mongo, url, options } = require('../../../../mongo.config.js');
const { vacationDates } = require('./vacation-dates');

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-course').collection('vacationDetail');

  collection.insertMany(vacationDates).then(() => {
    client.close();
  }).catch(() => {
    client.close();
  });
}).catch(() => {});
