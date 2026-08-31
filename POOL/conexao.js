const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: "localhost", 
    user: "root",
    password: "",
    database: "meuBanco",
    waitForConnections: true,//se todas as conexões estiverem ocupadas ele vai criar um fila de espera, caso false ele exibe um erro se estiver full
    queueLimit: 10, //numero maximo de pessoas na fila de espera, se estiver 0 será ilimitado
    connectionLimit: 10, //maximo de conexões simuntaneas 
})

module.exports = pool 

//em vez de fazer um função assincrona, basta declar a pool e exportar ela, para ver mais (index.js)