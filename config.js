const mongoose = require('mongoose');

let dev_db_url = '';

let mongoDb = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error : '));