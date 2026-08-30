async function checarResposta() {
    const resp = await fetch("http://127.0.0.1:3000/usuarios"); //conexão
    //.ok vai é booleano, se o statis for:

    if (!resp.ok) { //caso o status seja 400, 401, 403, 404 ou 500
        if (resp.status === 404) { //se for 404
            console.log("Ops! Esse usuário não existe (404).");
        } else if (resp.status === 500) { //se for 500
            console.log("O servidor pifou! Tente mais tarde (500).");
        }
        return; // Para a função aqui
    }
    //qualquer status ent 200 até 299 esta seguro
    
    const dados = await resp.json();
    console.log("Sucesso:", dados);
}
