let sql = "SELECT * FROM produtos WHERE 1=1" //Essa vai ser a consulta que vamos modificar conforme for preciso
//WHERE 1=1 é um truque que permite a consulta acontecer mesmo sem nem um filtro
let valores = [] //esse é o vetor que vamos armazenar as infos. para a consulta no banco

if (categoria) { //verifica se a variavel existe e tem um valor
    sql += " AND categoria = ?" //vai adicionar a nossa consulta uma busca se baseando no nome da categoria, o placeholder diz ao mysql que 
    //isso ainda vai receber um valor
    valores.push(categoria) //vai adicionar essa categoria dentro do vetor
}

await pool.query(sql, valores) //realiza a consulta, aqui é onde o mysql vai ler a consulta é substituir cada uma das (?) pelos elementos do vetor

