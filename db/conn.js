const mongoose = require("mongoose")

async function main() {
    try {
        const uri = "mongodb+srv://qap:senha@cluster1.tpk5jq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
        await mongoose.connect(uri);
        console.log("conectou")

    } catch(error) {
        console.log(error)
    }
}

module.exports = main