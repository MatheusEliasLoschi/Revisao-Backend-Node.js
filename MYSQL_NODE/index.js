const estabelecerConexao = require('./db') //chamamos a função que foi exportada para o nosso arquivo

async function teste() {
    try {
        const conexao = await estabelecerConexao() //chamos a função de maineira assincrona

    } 
    catch (error) {
        console.log(error)
    }
}

async function operacoesCRUD() {
    const nome = "matheus"
    const idade = 16
    const id = 1
    try {
        const conexao = await estabelecerConexao() 

        //SELECT / READ:

        const [ linhas ] = await conexao.query("SELECT * FROM nome_tabela") //ele vai selecionar todas as informações da tabela
        return linhas // retornamos os dados para a função, assim podemos envia-los com app.get
        //usamos o [] pois o mysql2 retorna 2 itens na resposta
        //as informações da tabela e meta dados, como queremos apenas os dados[0] usamos o colchetes para pegar apenas o 1º item, o resto e excluido

        //INSERT / CREATE:

        const sql = 'INSERT INTO nome_tabela (coluna1, coluna2) VALUES (?, ?)' //vai inserir nas colunas os valores dos ? que vão ser associados agr
        await conexao.query(sql, [nome, idade]) //associa os placeholders (?) coms os valores, em ordem, isso é usado para segurança
        
        // UPDATE / PUT:

        const sql2 = 'UPDATE usuarios SET nome = ?, idade = ? WHERE id = ?'
        await conexao.query(sql2, [nome, idade, id])

        //DELETE:

        const sql3 = 'DELETE FROM usuarios WHERE id = ?'
        await conexao.query(sql3, [id])
    } 
    catch (error) {
        console.log(error)
    }
}
