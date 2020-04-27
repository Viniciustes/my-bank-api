import express from 'express';
const app = express();
const port = 3000;

app.get('/', (_req, res) => res.send('Hello World - GET'));

app.post('/', (_req, res) => res.send('Hello World - POST'));

app.listen(port, () => {
    console.log(`Porta em execução ${port}`);
});






//Comando para rodar a aplicação: 
// via node:
//node .\src\index.js

// via nodemon:
// nodemon --experimental-modules .\src\index.js