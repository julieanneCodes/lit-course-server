module.exports = (app) => {
  const validator = require('../controllers/julieanneCodes/data.controller.js');

  app.get('/get-dates', validator.getDates);
};
