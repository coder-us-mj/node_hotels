require("dotenv").config();
const mongoose = require('mongoose');
const dbUrl=process.env.DB_URL;
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

