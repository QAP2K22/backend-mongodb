const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String, 
        required: true,
    },
    cpf: {
        type: String, 
        required: true,
    },
    endereco: {
        type: String, 
        required: true,
    },
    telefone: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
})

const cliente = mongoose.model('cliente', schema)

module.exports = cliente