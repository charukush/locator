const mongoose = require('mongoose');
const dbURI = process.env.mongoUrl;
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.set('debug', true);
mongoose.connection.on('connected', () =>{
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Mongoose disconnected');
});

require('./locations');