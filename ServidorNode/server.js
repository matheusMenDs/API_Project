const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware para interpretar JSON (se você estiver usando)
app.use(express.json());



// Rota para a raiz "/"
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');  // Mensagem de sucesso na rota raiz
});
 

// Rota GET para ler o arquivo JSON e enviá-lo como resposta
app.get('/data', (req, res) => {
    // Lê o arquivo data.json
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo JSON');
        } else {
            // Envia o conteúdo do arquivo JSON como resposta
            res.json(JSON.parse(data));
        }
    });
});



// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


// GET --> LISTAR
// POST --> CRIAR
// PUT --> EDITAR VÁRIOS
// PATCH --> EDITAR UM
// DELETE --> DELETAR UM
