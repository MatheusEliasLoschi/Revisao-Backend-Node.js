const pool = require('./conexao')

async function salvar() {
    const [dados] = await pool.query("SELECT * FROM usuarios") //e so usar a assincronia aqui!!
    //use [] pq ele tambem retorna metadados e a consulta em si, como vc so quer a consuta [0] vc usa ele
    return dados
}

//HÁ OUTRA FORMA DE FAZER ISSO TAMBEM, PORÉM MENOS EFICAZ
async function menosEficaz() {
    const conexao = await pool.getConnection(); // 1. Pega manualmente uma conexão livre
    try {
        const [linhas] = await conexao.query('SELECT * FROM usuarios'); 
        res.json(linhas);
    } 
    
    finally {
        conexao.release(); // 3. Tem que lembrar de devolver manualmente
    }
}
