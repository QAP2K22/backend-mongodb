const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
})

const cliente = mongoose.model('cliente', schema)

module.exports = cliente