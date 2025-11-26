var express = require("express");
var router = express.Router();
var conviteController = require("../controllers/conviteController"); // << caminho correto?

router.get("/quantidade/:idUsuario", conviteController.obterQuantidade);
router.get("/ranking/total", conviteController.rankingTotal);

module.exports = router;