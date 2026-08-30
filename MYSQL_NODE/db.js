const mysqlSincrono = require('mysql2') //Chama o mysql2 normal para o arquivo
const mysqlAssincrono = require('mysql2/promise') //Chama o mysql2/promise para o arquivo, permitindo lidar com promise


//EXISTEM 2 FORMAS DE FAZER A CONEXÃO
//1. FORMA (SEM ASYNC):

const conexaoSincrona = mysqlSincrono.createConnection({ //criamos a conexao
    host: "localhost", //onde vai rodar no caso aqui é no localHost
    user: "root", //usuario padrão
    password: "", //senha
    database: "biblioteca" //nome do banco
})

//2. FORMA (ASSINCRONA):

async function estabelecerConexao() { //cria a função assincrona
    const conexaoAssincrona = mysqlAssincrono.createConnection({ //estabelece a conexão
        host: "localhost", //onde vai rodar no caso aqui é no localHost
        user: "root", //usuario padrão
        password: "", //senha
        database: "biblioteca" //nome do banco
    })
    return conexaoAssincrona //retorna essa veriavel para a função, oque permite usar ela em outros arquivos caso exportada, mantendo seu aync
}

estabelecerConexao() //da para chamar ela agora
// ou 
module.exports = estabelecerConexao //permitir que outros arquivos usem ela (olhe index.js para saber mais)