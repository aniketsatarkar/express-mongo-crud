const express    = require('express');
const bodyParser = require('body-parser');
const product    = require('./routes/product.route');

// initialize MongoDB connection >>>
// const mongoose = require('mongoose');

// // let dev_db_url = `mongodb+srv://admin:bohemia@420@tododb-j3g8o.mongodb.net/test`;
// let dev_db_url = `mongodb+srv://admin:bohemia%40420@tododb-j3g8o.mongodb.net/test?retryWrites=true`;

// let mongoDb = process.env.MONGODB_URI || dev_db_url;

// mongoose.connect(mongoDb, { uri_decode_auth: true, useNewUrlParser: true });

// mongoose.Promise = global.Promise;

// let db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error : '));


const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert'); 

let url = `mongodb+srv://admin:bohemia%40420@tododb-j3g8o.mongodb.net/test?retryWrites=true`;

MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  console.log('Connection successfull!!!');
  
  db.close();
});

// initialize express app instance >>>
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/product', product); // will group routes in localhost:1234/product/*

let port = 1234;

app.listen(port, () => {
  console.log('server is listening at port : ' + port);
});
