/**
 * Controllers (route handlers).
 */
const bill = require('../../app/controllers/bills');

//const multer = require('multer');
//
//const upload = multer({ dest: path.join(__dirname, 'uploads') });


/**
 * API keys and Passport configuration.
 */
//const passport = require('passport');
//const passportConfig = require('../passport.js');



/** [exports Routes] */
module.exports = function (app) {


  //bill
  app.get('/api/v1/bill', bill.index);
  app.get('/api/v1/bill/paid', bill.billPaid);
  app.get('/api/v1/bill/month/:month', bill.billByMonth);
  app.get('/api/v1/bill/type/:type', bill.billByType);
  app.get('/api/v1/bill/:id', bill.show);
  app.post('/api/v1/bill', bill.new);
  app.put('/api/v1/bill/:id', bill.update);
  app.delete('/api/v1/bill/:id', bill.destroy);
};