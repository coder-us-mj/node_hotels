const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
      type: String,
      enum: ['Sweet', 'Spicy','Sour'],
      required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients:{
        type: []
    },
    num_Sales:{
        type: Number,
        default: 0
    }
})
const items = mongoose.model('items',menuItemsSchema)
module.exports= items;