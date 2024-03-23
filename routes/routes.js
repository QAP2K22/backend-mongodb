const express = require("express")
const Produto = require("../models/produto/produto")
const router = express.Router()

router.get("/", function (req, res) {
    res.json({})
})

router.get("/produtos", async function (req, res) {
    res.json(await Produto.find())
})

router.get("/produtos/:product_id", async function (req, res) {
    const product_id = req.params.product_id
    res.json(await Produto.findById(product_id))
})

router.post("/produtos", async function (req, res) {
    const product_name = req.body
    res.json(await Produto.create(product_name))
})

router.delete("/produtos/:product_id", async function (req, res) {
    const product_id = req.params.product_id
    res.json(await Produto.findByIdAndDelete(product_id))
})

router.put("/produtos/:product_id", async function (req, res) {
    const product_id = req.params.product_id
    const update_value = req.body

    res.json(await Produto.findByIdAndUpdate(product_id, update_value))

})



module.exports = router