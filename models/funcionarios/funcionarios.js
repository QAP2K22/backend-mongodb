const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
})

const funcionarios = mongoose.model('funcionarios', schema)

module.exports = funcionarios