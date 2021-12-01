const mongoose = require('mongoose');

require('dotenv').config()

const mongooseURI = process.env.DATABASE_URL

const connectToMongo = () => {
    mongoose.connect(mongooseURI, () => {
        console.log("Connected to Mongoose")
    })
}

module.exports = connectToMongo