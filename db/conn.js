const mongoose = require("mongoose")
require('dotenv/config');
async function main() {
    try {
        const uri = `mongodb+srv://qap:${process.env.MONGO_DB_PASSWORD}@cluster1.tpk5jq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
        await mongoose.connect(uri);
        console.log("[BD STATUS]: BANCO CONECTADO COM SUCESSO.")

    } catch(error) {
        console.log(error)
    }
}

module.exports = main