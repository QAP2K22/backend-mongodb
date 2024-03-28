const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
})

const comanda = mongoose.model('comanda', schema)

module.exports = comanda