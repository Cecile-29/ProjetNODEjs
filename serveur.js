/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});*/
/*
const express = require('express')
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index', {"nom" : "Auger", "prenom" : "Cécile"});
})

/*
app.get('/test', (req, res) => {
    res.render('test');
})*/

/*
app.get('/search', (req, res) => {
    //recherche en bd(via le modele(repository))
    console.log(req.query.q);
    res.render('search',{q: req.query.q});
})*/

/*
// avec méthode post
app.post('/search', (req, res) => {
    //recherche en bd(via le modele(repository))
    console.log(req.body.q);
    res.render('search',{q: req.body.q});
})

app.listen(process.env.PORT_HTTP,() => {
    if(process.env.APP_ENV == 'dev'){
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT_HTTP}`);
    }
})
*/



const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render(
        'index', 
        {greet : "Bienvenue !", invit: "Remplissez le form : "}
    );
})

app.get('/search', (req, res) => {
    // recherche enn bdd (via le modele (repository))
    //console.log(req.query.q)
    res.render('search', { q :req.query.q });
})

app.post('/search', (req, res) => {
    // recherche enn bdd (via le modele (repository))
    console.log(req.body.q)
    res.render('search', { q :req.body.q });
})


app.listen(process.env.PORT_HTTP,() => {
    if(process.env.APP_ENV == 'dev') {
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT_HTTP}`);
    }
})
