const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const config = require('./config');
const PASSWORD = config.password;
const USER = config.username;

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.use(bodyParser.json())
app.use(cors())

app.get('/api/scores', (req, res) => {
  db.collection('scores').find().sort({score:-1}).limit(5).toArray((err, result) => {
    if (err) return console.log(err)
    res.send({scores: result});
    // console.log({TopScores: result});
  })
})
      
app.post('/api/scores', (req, res) => {
  db.collection('scores').save(req.body)
  .then(console.log(req.body))
  .then(db.collection('scores').find({name: req.body.name}).sort({score:-1}).limit(5).toArray((err, result) => {
    if (err) {
      return console.log(err)
    }
    res.send({scores: result})
  }))
})

app.get('/api/scores/:name', (req, res) => {
  db.collection('scores').find({name: req.params.name}).sort({score:-1}).limit(5).toArray((err, result) => {
    // console.log(req.params.name)
    if (err) return console.log(err)
    res.send({scores: result})
  })
})

var port = process.env.PORT || 3000;
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
    // console.log(url)
    console.log('listening on 3000')
  })
})