/* Mongo set up */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = 'mongodb://localhost/beermenu';
const MONGO_HEROKU_URL = 'mongodb://beerheroku:beerheroku1@ds147344.mlab.com:47344/heroku_tvw3h4x7';

if (process.env.MONGODB_URI) {
	mongoose.connect(MONGO_HEROKU_URL, { useNewUrlParser: true });
	MONGO_URL = process.env.MONGODB_URI;
} else {
	mongoose.connect(MONGO_HEROKU_URL, { useNewUrlParser: true }); // local mongo url
	MONGO_URL = MONGO_LOCAL_URL;
}

const db = mongoose.connection;
db.on('error', err => {
	console.log(`Error connecting to the database: ${err}`);
});

db.once('open', () => {
	console.log(`Successfully connected to your mongo database: ${MONGO_URL}`);
});

module.exports = db;