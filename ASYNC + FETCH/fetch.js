//METODO GET, obtendo dados

const resp = await fetch("http://127.0.0.1:3000/historico") //Salvos essa resposta dentro de variavel resp
const dados = await resp.json() //Transformamos ela em um objeto normal do javascript

//METODO POST criando e enviando Dados

await fetch("http://127.0.0.1:3000/historico", { //esse é o path, a rota que vai ser enviado esse dados
    method: "POST", //o metodo usado

    headers: { //isso esta explicado em EXPRESS/middlewere |
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        ganhador: "X"
    })
})