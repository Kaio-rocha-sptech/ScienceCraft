// conviteController.js
var conviteModel = require("../models/conviteModel");

function obterQuantidade(req, res) {
    var idUsuario = req.params.idUsuario;

    conviteModel.obterQuantidadeConvites(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar quantidade de convites:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// Ranking geral
function rankingTotal(req, res) {
    conviteModel.rankingTotalConvites()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}


module.exports = {
    obterQuantidade,
    rankingTotal
};
