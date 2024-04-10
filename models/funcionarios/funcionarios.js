const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    cpf: String,
    endereco: String,
    sexo: String,
    telefone: String,
    cargo_id: Number 
})

const funcionarios = mongoose.model('funcionarios', schema)

module.exports = funcionarios