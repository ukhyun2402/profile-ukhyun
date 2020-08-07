const express = require('express');
const hbs = require('express-hbs');
const path = require('path');

const app = express();

app.engine('hbs', hbs.express4({
    // partialsDir: __dirname + '/public/view/partials' path.join()
    partialsDir: path.join(__dirname, 'public', 'view', 'partials')
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public', 'view'));

app.get('/', (req, res) => {
    res.render('main',{
        title :'main'
    });
});

app.listen(3000, () => {
    console.log("Server on at 3000");
});