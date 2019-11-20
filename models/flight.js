//single file per model that 
//a) defines the schema
//b) compiles the schema into a model
//c)exports that model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
});


const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNumber: {
        type: Number,
        min: 10, max: 9999,
        required: true
    },
    departs: {
    type: Date,
    default: Date.now() - (366*24*60*60*1000)
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    destinations: [destinationSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);