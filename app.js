const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

// Servir contenido estatico
// Handlebars 
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));


// app.get('/', function (req, res) {
//   res.send('Home Page')
// })

app.get('/',(req,res)=>{
  res.render('home', {
    nombre: "Israel Morales",
    titulo: "Curso de NodeJs"
  });
});

// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + "/public/generic.html");
// })

app.get('/elements', (req,res) =>{
  res.render('elements', {
    nombre: "Israel Morales",
    titulo: "Curso de NodeJs"
  });
});

app.get('/generic', (req,res) =>{
  res.render('generic', {
    nombre: "Israel Morales",
    titulo: "Curso de NodeJs"
  });
});

// app.get('*', function (req, res) {
//   res.sendFile(__dirname +'/public/404.html');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});