/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  var data = [
    {
      id : 1,
      name : 'John',
      read: true,
      write :false,
      lastLogin : "07/06/2016 16:00:00" ,
      loginTotal : "15"

    },
    {
      id : 2,
      name : 'Rick',
      read: true,
      write :false,
      lastLogin : "09/04/2016 08:00:00" ,
      loginTotal : "30"

    },
    {
      id : 3,
      name : 'Sam',
      read: true,
      write :false,
      lastLogin : "10/05/2016 18:00:00" ,
      loginTotal : "60"

    }
  ];

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': data
    });
  });

  usersRouter.post('/', function(req, res) {
    res.send('""');
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/users', require('body-parser').json());
  app.use('/api/users', usersRouter);
};
