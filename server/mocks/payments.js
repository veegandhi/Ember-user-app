/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var paymentsRouter = express.Router();
  var data = [
    {
      id:1,
      isCreditCard : false,
      isDirectDebit : true,
      CCname:  'asdas',
      CCnum : 'as',
      CCexpiryMM: 'asd',
      CCexpiryYY: 'asd',
      CCcvv : 'asd',
      DDaccBSB : 'asdas',
      DDaccNo: 'asd',
      DDaccName: 'asd'
    }
  ];

  paymentsRouter.get('/', function(req, res) {
    res.send({
      'payments': data
    });
  });

  paymentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  paymentsRouter.get('/:id', function(req, res) {
    res.send({
      'payments': {
        id: req.params.id
      }
    });
  });

  paymentsRouter.put('/:id', function(req, res) {
    res.send({
      'payments': {
        id: req.params.id
      }
    });
  });

  paymentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/payments', require('body-parser').json());
  app.use('/api/payments', paymentsRouter);
};
