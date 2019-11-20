//single file per model that 
//a) defines the schema
//b) compiles the schema into a model
//c)exports that model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNumber: {
        type: Number,
        min: 10, max: 9999
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date,
    },
    departs:  {
        type: Date,
        default: Date.now() + (366*24*60*60*1000)
    },

});

module.export = mongoose.model('Flight', flightSchema)