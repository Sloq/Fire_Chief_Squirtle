const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const config = require('./config');
const PASSWORD = config.password;
const USER = config.user;

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.sendFile(__dirname + ('/index.html'));
})

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.post('/api/scores', (req, res) => {
  db.collection('scores').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('Score saved to database')
    res.send('Score Saved')
  })
})

var port = process.env.port || 3000;
var db;
var url;
let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  url = "mongodb://localhost:27017/firechief";
} else {
  url = `mongodb://${USER}:${PASSWORD}@ds062448.mlab.com:62448/firechief`;
}

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(port, () => {
    console.log(url)
    console.log('listening on 3000')
  })
})