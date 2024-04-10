const express = require("express")
const ProdutoController = require("../controller/ProdutoController")
const router = express.Router()

router.get("/", function (req, res) {
    res.json({})
})


//PRODUCTS

router.get("/produtos", (req, res) => ProdutoController.getAll(req, res))
router.get("/produtos/:product_id", (req, res) => ProdutoController.getById(req, res))
router.get("/produtos/name/:product_name", (req, res) => ProdutoController.getByName(req, res))
router.post("/produtos", (req, res) => ProdutoController.create(req, res))
router.delete("/produtos/:product_id", (req, res) => ProdutoController.delete(req, res))
router.put("/produtos/:product_id", (req, res) => ProdutoController.update(req, res))


//CLIENTS

router.get("/clientes", (req, res) => ProdutoController.getAll(req, res))
router.get("/clientes/:client_id", (req, res) => ProdutoController.getById(req, res))
router.get("/clientes/name/:client_name", (req, res) => ProdutoController.getByName(req, res))
router.post("/clientes", (req, res) => ProdutoController.create(req, res))
router.delete("/clientes/:client_id", (req, res) => ProdutoController.delete(req, res))
router.put("/clientes/:client_id", (req, res) => ProdutoController.update(req, res))


//EMPLOYEE

router.get("/funcionarios", (req, res) => ProdutoController.getAll(req, res))
router.get("/funcionarios/:client_id", (req, res) => ProdutoController.getById(req, res))
router.get("/funcionarios/name/:client_name", (req, res) => ProdutoController.getByName(req, res))
router.post("/funcionarios", (req, res) => ProdutoController.create(req, res))
router.delete("/funcionarios/:client_id", (req, res) => ProdutoController.delete(req, res))
router.put("/funcionarios/:client_id", (req, res) => ProdutoController.update(req, res))


//COMANDA

router.get("/comanda", (req, res) => ProdutoController.getAll(req, res))
router.get("/comanda/:product_id", (req, res) => ProdutoController.getById(req, res))
router.get("/comanda/name/:product_name", (req, res) => ProdutoController.getByName(req, res))
router.post("/comanda", (req, res) => ProdutoController.create(req, res))
router.delete("/comanda/:product_id", (req, res) => ProdutoController.delete(req, res))
router.put("/comanda/:product_id", (req, res) => ProdutoController.update(req, res))


module.exports = router