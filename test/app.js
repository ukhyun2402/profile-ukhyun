const express = require('express');
const hbs = require('express-hbs');
const path = require('path');

const app = express();

app.engine('hbs', hbs.express4({
    // partialsDir: __dirname + '/public/view/partials' path.join()
    partialsDir: path.join(__dirname)
}));

app.use(express.static(path.join(__dirname)));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("Server on at 3000");
});