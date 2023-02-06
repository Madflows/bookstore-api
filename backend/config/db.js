const mongoose = require('mongoose');

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongo connected on ${conn.connection.host}`.green.bold)
    } catch(error) {
        console.log(`Error: ${error}`.red.bold)
    }
}

module.exports = connectDB
