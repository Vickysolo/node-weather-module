const express = require('express');
const dotenv = require('dotenv').config();
const compare = require('./controllers/compare');
const responseHandler = require('./controllers/responseHandler');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req,res) => {
    res.send('Compara el tiempo entre dos ciudades');
})

app.get('/compareMadrid', async (req,res) => {
    if(!req.query.city){
        return res.json(responseHandler.invalid);
    }
    let tempDiff = await compare.compareTemperatures("Madrid",req.query.city);
    return res.json(tempDiff);
})

app.get('/compareCities', async(req,res) => {
    if(!req.query.city1 || !req.query.city2){
        return res.json(responseHandler.invalid);
    }
    let tempDiff = await compare.compareTemperatures(req.query.city1,req.query.city2);
    return res.json(tempDiff);
})

app.get('*', (req,res) => {
    return res.json(responseHandler.notFound);
})

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})

