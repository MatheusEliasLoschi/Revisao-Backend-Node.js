//5 PRINCIPAIS METODOS DE FILTRO

// 1. LIKE:

'SELECT nome FROM produtos WHERE nome LIKE '%SSD%'' 
//Ele vai retornar apenas aquilo que contenha a palavra SSD

// 2. ORDER BY:

'SELECT * FROM produtos ORDER BY preco ASC' //Vai retornar os preços do MENOR PARA O MAIOR

// 3. LIMIT:

'SELECT * FROM produtos LIMIT 20' //Vai retornar apenas as primeiras 20 linhas da consulta

// 4. OFFSET

'SELECT * FROM produtos LIMIT 20 OFFSET 10' //Diz ao sql para trazer no maximo 20 itens, PORÉM para ignorar os 10 primeiros

// 5. JOIN

'SELECT usuarios.nome, partidas.resultado FROM partidas JOIN usuarios ON partidas.usuario_id = usuarios.id'

/* 
SELECT usuarios.nome, partidas.resultado: 
    Define quais colunas vão aparecer na sua tela. Você está pedindo o campo 
    'nome' da tabela de usuários e o campo 'resultado' da tabela de partidas.

FROM partidas: 
    Indica que a tabela principal da busca é a tabela 'partidas'. 
    O MySQL vai começar olhando para ela.

JOIN usuarios: 
    Diz ao MySQL para "grudar" a tabela 'usuarios' junto com a tabela de partidas. 

ON partidas.usuario_id = usuarios.id: 
    É a regra de conexão. O MySQL vai olhar para a linha da partida, ver o 
    número que está no 'usuario_id' (por exemplo, usuário 5) e vai procurar na 
    tabela de usuários quem é o dono do 'id' número 5 para buscar o nome dele.
*/
