const Produto = require("../models/produto/produto")

const ProdutoController = {
    getAll: async (req, res) => {
        try {
            res.json(await Produto.find())
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getById: async (req, res) => {
        try {
            const product_id = req.params.product_id
            res.json(await Produto.findById(product_id))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    getByName: async (req, res) => {
        try {

           /*  const filtros = {}
            const campos = Object.keys(Produtos.schema.paths)
            for (let campo in req.query) {
                if(campos.includes(campo)){
                    filtros[campo] = {$regex: new RegExp(req.query[campo],'i')}
                }
            } */

            const product_name = req.params.product_name
            res.json(await Produto.find({ nome: { $regex: product_name, $options: 'mi' } }))
            //res.json(await Produto.findOne({ nome: product_name }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    create: async (req, res) => {
        try {
            const product_name = req.body
            res.json(await Produto.create(product_name))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    delete: async (req, res) => {
        try {
            const product_id = req.params.product_id
            res.json(await Produto.findByIdAndDelete(product_id))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
    update: async (req, res) => {
        try {
            const product_id = req.params.product_id
            const update_value = req.body

            res.json(await Produto.findByIdAndUpdate(product_id, update_value, { new: true /* Já realizar o select depois de ter o update*/ }))
        } catch (error) {
            res.status(404).json({ error: "[BACKEND STATUS]: " + error })
        }
    },
}

module.exports = ProdutoController