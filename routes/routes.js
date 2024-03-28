const express = require("express")
const ProdutoController = require("../controller/ProdutoController")
const router = express.Router()

router.get("/", function (req, res) {
    res.json({})
})

router.get("/produtos", (req, res) => ProdutoController.getAll(req, res))

router.get("/produtos/:product_id", (req, res) => ProdutoController.getById(req, res))

router.get("/produtos/name/:product_name", (req, res) => ProdutoController.getByName(req, res))

router.post("/produtos", (req, res) => ProdutoController.create(req, res))

router.delete("/produtos/:product_id", (req, res) => ProdutoController.delete(req, res))

router.put("/produtos/:product_id", (req, res) => ProdutoController.update(req, res))

module.exports = router