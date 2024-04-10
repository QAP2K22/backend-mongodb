const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    data: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    }
})

const comanda = mongoose.model('comanda', schema)

module.exports = comanda