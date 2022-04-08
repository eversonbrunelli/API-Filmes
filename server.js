//instalação express server
const express = require('express');
const path = require('path');

const app = express();

//arquivos estáticos
app.use(express.static('./dist/filmes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/filmes/'}),
);

//rodar a aplicação na porta padrão do Heroku
app.listen(process.env.PORT || 8080);