const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//Template
app.engine('handlebars', exphbs({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');

app.get("/", (re, res)=>{
    res.render('inicio');
});
app.get("/sobre", (re, res)=>{
    res.render('sobre');
});


app.listen(8080, ()=>{
    console.log("Servidor ligado na porta 8080: http://localhost:8080");
});