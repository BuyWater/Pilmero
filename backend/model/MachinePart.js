let Mongoose = require('mongoose');

const PartSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required:true,
    },
})

const partModel = Mongoose.model("part", PartSchema);

module.exports = partModel;