const express = require('express');
const bodyParser = require('body-Parser');
const cadRoute = require('./routes/cadastro');
const app = express();
const porta = 3000;

app.use(bodyParser.urlencoded({extended: false}));
cadRoute(app);
app.get('/',(req,res)=> res.send('Iniciado com susseco!'));
app.listen(porta,()=>console.log(`Api iniada na porta ${porta}`));