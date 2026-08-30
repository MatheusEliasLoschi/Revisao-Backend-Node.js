//Explicação completa sobre middlewere

// COMO E FEITO O ENVIO VIA POSY: 
async function enviar() {
    try {
        const resp = await fetch("http://127.0.0.1:3000/usuarios", { //Esse é o local onde vamos enviar no caso para o path usuarios
            method: "POST", //Metodo que vamos usar, no caso o POST pois ele cria ou envia um dado que é justamente oque vamos fazer aqui
            headers: { //serve como um "etiqueta", mostrando oque esta dentro da requisição que enviamos
                "Content-Type": "application/json" // nesssa "etiqueta" diz que o conteudo do pacote esta com dados .json,
                //isso faz com que o midelewere traduza essas informações para objetos JS tradicionais
            },
            body: JSON.stringify({ //Aqui ele o conteudo da requisição, ele fica salvo dentro do body (por isso usamos req.body para acessar), No formato JSON
                ganhador: ganhador //esses são os itens que estamos enviando, para acessar lá em outro arquivo usamos req.body.ganhador
            })
        })
    }
    catch(erro){
        console.error(erro)
    }
}