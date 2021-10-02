const mongoose = require("mongoose")
const config = require("config")
const db = config.get("MONGO_URI")

const connectDB = async() => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true 
        });
        console.log("MongoDB Connected ...");
    } catch (err) {
        //Process error fail
        process.exit(1)
    }
}

module.exports = connectDB;