var express = require('express')
const app = express();
const chalk = require('chalk');
var User = require('./../models/userModel');

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

app.route('/')
  .get((req, res, next) => {
    res.send('Information About the user.')
  })

  .post((req, res, next) => {
    // create a new user called chris
    req.user = new User(req.body);

    next();
  })

  .post((req, res, next) => {
    console.log(req.user);
    // call the built-in save method to save to the database
    req.user.save(function(err) {
      if (err) throw err;
      res.send('User saved successfully!');
      console.log('User saved successfully!');
    });

  })

  .put((req, res, next) => {
    res.send('animals home page.PUT.app.route')
  })

  .delete((req, res, next) => {
    res.send('animals home page.DELETE.app.route')
  })



module.exports = app;
