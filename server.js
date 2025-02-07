require("dotenv").config();
const express = require("express");
const app = express();
const connectionDB = require("./db.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT= process.env.PORT || 3000;
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel");
});
  const personRoutes = require('./routes/personRoutes.js'); 
    app.use('/person', personRoutes);
  
  const menuRoutes = require('./routes/menuRoutes.js'); 
   app.use('/menu', menuRoutes) ;

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});
