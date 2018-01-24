const express = require('express')
const app = express();
const chalk = require('chalk');
const User = require('./../models/userModel');
const creds = require('../../creds.json');
const accountSid = creds.sms.accountSid; // Your Account SID from www.twilio.com/console
const authToken = creds.sms.authToken;   // Your Auth Token from www.twilio.com/console
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// send SMS
const sendSms = (phoneNumber, message) => {
  client.messages.create({
      body: message,
      to: phoneNumber,  // Text this number
      from: creds.sms.fromPhoneNumber // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}

app.route('/')
  .get((req, res, next) => {
    sendSms(req.query.phonenumber, req.query.message);
    res.json("Request sent to send SMS to: "+ req.query.phonenumber);

  })
  //
  // .post((req, res, next) => {
  //   // create a new user called chris
  //   req.user = new User(req.body);
  //
  //   next();
  // })
  //
  // .post((req, res, next) => {
  //   console.log(req.user);
  //   // call the built-in save method to save to the database
  //   req.user.save(function(err) {
  //     if (err) throw err;
  //     res.send('User saved successfully!');
  //     console.log('User saved successfully!');
  //   });
  //
  // })
  //
  // .put((req, res, next) => {
  //   res.send('animals home page.PUT.app.route')
  // })
  //
  // .delete((req, res, next) => {
  //   res.send('animals home page.DELETE.app.route')
  // })



module.exports = app;
