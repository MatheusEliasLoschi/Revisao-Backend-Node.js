async function buscar() { //Avisa ao JS que essa função trabalha de forma assincrona
    try { //Ele vai execultar tudo dentro dele, se der erro, pula direto ao catch
        const dados = await fetch("https://pokeapi.co/api/v2/pokemon/ditto") //o await vai esperar a tarefa ser concluida antes de seguir para a proxima linha
        const dadosOBJ = await dados.json()
    }
    catch(error){ //captura o erro do try e exibe ele
        console.log(error)
    }
}