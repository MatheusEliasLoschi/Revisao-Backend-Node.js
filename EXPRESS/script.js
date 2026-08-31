const express = require('express') //Realizamos a chamada do express e o declaramos em um variavel
const app = express() //Usamos o express dentro de variavel app, criando a aplicação

app.use(express.json()) //Isso aqui é um middlewere, pois esta entre a resquisição e a resposta
//nesse caso ele está fazendo que o express possa interpretar o formato .json(), nessa caso ele armazena isso dentro de req.body 

app.get("/usuarios", (req, res) => { //obtem dados, usado junto a res
    const dados = req.body //vai adicionar tudo dentro de um unico objeto JS e salvar em dados
    const ganhador = req.body.ganhador //aqui ele vai adicionar apenas o item ganhador vindo da requisição
    const { nome, idade} = req.body // aqui ele vai atribuir nome e idade direto, basta o body conter o mesmo nome das variaveis e ele faz o resto

    res.send("SUCESSO") //Meu frontEnd vai receber isso, no caso essa msg vai ser armazenada dentro de fetch, para puxa-lá usamos resp.text()
    //no caso resp é o nome da varievel que atribui ao fetch

})
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id //aqui ele vai pegar o ID do usuario, no caso o id dele vai ser o valor na URL após a barra, tipo:
    // usuario/14 ---> o id é 14
    res.json(id) //aqui vamos mandar ID no formato json(), para destransformar no front --> const dados = resp.json() e dps só acessar id
})

app.get('/usuarios', (req, res) => {
    const cat = req.query.categoria //aqui ele vai pegar o item categoria vendo da URL
    //Como as query são opcionais não devomos colocar elas na rota(path), els são inviseveis

    //Tambem e possivel filtrar oque queremos:
    const { categoria } = req.query //o query vai retornar varios itens caso no filtro contenha mais de 1, ness caso destruturamos essa resposta
    //e salvamos o item categoria nessa variavel

    //Além disso tambem podemos atribuir varios itens destruturando o vetor>

    const {nome, idade} = req.query //recuperamos os itens nome e idade e salvamos em 2 variaveis.

    res.status(200).json() //aqui ele vai retornar o status 200 (ok) para o fetch OLHE O ARQUIVO resSTATUS.js para saber MAIS
})

app.post("/usuarios", (req, res) => { //cria ou envia dados

})
app.put("/usuarios/:id", (req, res) => { //atualiza dados

})
app.delete("/usuarios/:id", (req, res) => { //apaga os dados

})

app.listen(3000, () => { //fazemos o servidor "escultar" a porta 3000 permitindo nos fazemos conexão entre o front e backEND, enviando e recebendo dados
    console.log("Servidor rodando")
})

