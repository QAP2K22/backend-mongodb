


const ComandaController = require("../models/comanda/comanda")

const ComandaController = {
    getAll: async (req, res) => {
        try {
            res.json(await ComandaController.find())
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getById: async (req, res) => {
        try {
            const product_id = req.params.product_id
            res.json(await ComandaController.findById(product_id))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getByName: async (req, res) => {
        try {
            const product_name = req.params.product_name
            res.json(await ComandaController.findOne({ nome: product_name }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    create: async (req, res) => {
        try {
            const product_name = req.body
            res.json(await ComandaController.create(product_name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    delete: async (req, res) => {
        try {
            const product_id = req.params.product_id
            res.json(await ComandaController.findByIdAndDelete(product_id))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    update: async (req, res) => {
        try {
            const product_id = req.params.product_id
            const update_value = req.body

            res.json(await ComandaController.findByIdAndUpdate(product_id, update_value, { new: true /* Já realizar o select depois de ter o update*/ }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
}

module.exports = ComandaController