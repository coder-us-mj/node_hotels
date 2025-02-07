const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,

  },
  work: {
    type: String,
    required: true,
    enum: ["chef", "waiter", "manager"]
  },
  mobile: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  salary: {
    type: Number,
    required: true
  },
 
},
{
  timestamps: true
});

// create person modal

const person= mongoose.model('Person', personSchema);
module.exports = person;
