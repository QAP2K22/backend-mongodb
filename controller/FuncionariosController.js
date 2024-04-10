const FuncionariosController = require("../models/funcionarios/funcionarios")
const FuncionariosController = {
    getAll: async (req, res) => {
        try {
            res.json(await FuncionariosController.find())
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getById: async (req, res) => {
        try {
            const name = req.params.name
            res.json(await FuncionariosController.findById(name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getByName: async (req, res) => {
        try {
            const name = req.params.name
            res.json(await FuncionariosController.findOne({ nome: name }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    create: async (req, res) => {
        try {
            const name = req.body
            res.json(await FuncionariosController.create(name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    delete: async (req, res) => {
        try {
            const name = req.params.name
            res.json(await FuncionariosController.findByIdAndDelete(name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    update: async (req, res) => {
        try {
            const name = req.params.name
            const update_value = req.body

            res.json(await FuncionariosController.findByIdAndUpdate(name, update_value, { new: true /* Já realizar o select depois de ter o update*/ }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
}

module.exports = FuncionariosController