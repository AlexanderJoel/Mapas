const express = require('express');
const mongoose = require('mongoose');
const Mapa = require('./models/mapaModel');

const app = express();
const db = mongoose.connect('mongodb://localhost/mapa');
const mapaROUTER = express.Router();
const port = process.env.PORT || 3000;

mapaROUTER.route('/mapas')
    .get((req, res) => {
        const { query } = req;
        Mapa.find(query, (err, mapas) => {
            if (err) {
                return res.send(err);
            }
            return res.json(mapas);
        });
    });

app.use('/api', mapaROUTER);

app.get('/', (req, res) => {
    res.send('Yo puedo todo');
});

app.get('/yavirac', (req, res) => {
    const response = { saludo: 'Soy Yavirac' };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});