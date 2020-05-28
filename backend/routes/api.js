let MachineModel = require('../model/MachinePart')

let Mongoose = require('mongoose');
let express = require('express')
let Router = express.Router();

require('dotenv').config();

Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

Router.get('/part', function(req, res, next){
    MachineModel.find({}, function(err, data){
        if(err){return console.log(err)}
        res.json(data);
    })
})

Router.post('/part', function(req, res, next){
    const Item = new MachineModel({
        name: req.body.name,
        quantity: req.body.quantity,
        value: req.body.value
    })

    Item.save(Item, function(err, data){
        if(err){return console.log(err)}
        console.log(data);
    })

    res.status(201).json({
        message: 'Handling POST requests to /part',
        created: Item
    })
})

Router.delete('/part:id', function(req, res, next) {
    MachineModel.findByIdAndRemove(req.params.id, function(err, data){
        if(err){return console.log(err)}
        res.json(data);
        next();
    })
})

module.exports = Router;