const mongoose = require("mongoose")
require('dotenv/config');

async function main() {
    try {
        console.log("[DB STATUS]: INICIANDO")
        const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster1.tpk5jq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
        await mongoose.connect(uri);
        console.log("[DB STATUS]: CONECTADO E INICIADO")

    } catch (error) {
        console.log(`[DB STATUS]: ${error}`)
    }
}

module.exports = main