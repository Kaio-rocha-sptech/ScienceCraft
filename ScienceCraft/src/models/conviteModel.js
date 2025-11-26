// conviteModel.js
var database = require("../database/config");

function obterQuantidadeConvites(idUsuario) {
    var instrucao = `
        SELECT 
            ${idUsuario} AS codigo,
            COUNT(*) AS total
        FROM usuario
        WHERE fkConvite = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Total de convites usados por cada usuário
function rankingTotalConvites() {
    var instrucao = `
        SELECT 
            u.idUsuario AS codigoUsuario, 
            u.nome, 
            COUNT(c.idUsuario) AS totalConvites
        FROM usuario u
        LEFT JOIN usuario c ON c.fkConvite = u.idUsuario
        GROUP BY u.idUsuario, u.nome
        ORDER BY totalConvites DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    obterQuantidadeConvites,
    rankingTotalConvites
};