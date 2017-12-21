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
  skip: (req, res) => {
    return res.statusCode >= 400
  },
  stream: process.stdout
}));

app.use('/user', require('./app/controllers/user_controller'));

app.get('/', (req, res) => {
       res.send("you deserve a fruit");
}    );



//Error Handler when  not found 
app.use((req, res, next)=>{
  req.status(404).send("Sorry cannot find it!!");
})

app.listen(port, () => {
  console.log("Server started at : " + chalk.blue(port));
})
