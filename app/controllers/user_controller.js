var express = require('express')
const app = express();
const chalk = require('chalk');


// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

app.route('/')
  .get((req, res, next) => {
    res.send('animals home page.GET.app.route')
  })

  .post((req, res, next) => {
    res.send('animals home page.POST.app.route')
  })

  .put((req, res, next) => {
    res.send('animals home page.PUT.app.route')
  })

  .delete((req, res, next) => {
    res.send('animals home page.DELETE.app.route')
  })



module.exports = app;
