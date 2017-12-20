const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');
const route = express.Router();
const port = 3333;
//Static files path
app.use(express.static(__dirname + '/'));

app.use(morgan('dev', {
  skip: function(req, res) {
    return res.statusCode < 400
  },
  stream: process.stderr
}));

app.use(morgan('dev', {
  skip: function(req, res) {
    return res.statusCode >= 400
  },
  stream: process.stdout
}));

app.use('/user', require('./app/controllers/user_controller'));

app.get('/', (req, res) => {
  res.send("you deserve a fruit");
});






app.listen(port, () => {
  console.log("Server started at : " + chalk.blue(port));
})
