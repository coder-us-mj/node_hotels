const mongoose = require('mongoose');

const dbUrl="mongodb+srv://mukuljain169:BIqovab8lt6A2Q06@cluster0.fewlu.mongodb.net/hotel";
mongoose.connect(dbUrl,{useNewUrlParser: true,
                       useUnifiedTopology: true});
const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
  console.log("Database connected");
});

dbConnection.on('error', (err) => {
  console.log("Database not connected");
});


dbConnection.on('disconnected', () => {
  console.log("Database disconnected");
});

module.exports=dbConnection;

