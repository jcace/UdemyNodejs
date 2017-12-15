const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [{'hello' :'Ilike'},
        {cool: true}]
    });
});

app.get('/about', (req,res) => {
    res.send('About Page');
});

// Route at /bad, respond with json data with errorMessage string

app.get('/bad', (req,res) => {
    res.send({'errorMessage': "Request failed."});
});

app.listen(3000);