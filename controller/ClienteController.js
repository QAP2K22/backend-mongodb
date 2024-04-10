const ClienteController = require("../models/cliente/cliente")
const ClienteController = {
    getAll: async (req, res) => {
        try {
            res.json(await ClienteController.find())
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getById: async (req, res) => {
        try {
            const client_name = req.params.client_name
            res.json(await ClienteController.findById(client_name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getByName: async (req, res) => {
        try {
            const client_name = req.params.client_name
            res.json(await ClienteController.findOne({ nome: client_name }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    create: async (req, res) => {
        try {
            const client_name = req.body
            res.json(await ClienteController.create(client_name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    delete: async (req, res) => {
        try {
            const client_name = req.params.client_name
            res.json(await ClienteController.findByIdAndDelete(client_name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    update: async (req, res) => {
        try {
            const client_name = req.params.client_name
            const update_value = req.body

            res.json(await ClienteController.findByIdAndUpdate(client_name, update_value, { new: true /* Já realizar o select depois de ter o update*/ }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
}

module.exports = ClienteController