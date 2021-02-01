const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ieshiva', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://sacor:saraadar01@cluster0.p7wdh.mongodb.net/ieshiva', {useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb+srv://sarita:sa1078@cluster0.p7wdh.mongodb.net/ieshiva', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo conectato")
  
});

module.exports = db;
