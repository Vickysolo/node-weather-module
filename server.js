const express = require('express');
const dotenv = require('dotenv').config();
const compare = require('./controllers/compare');
const handleErrors = require('./controllers/handleErrors');

const port = process.env.PORT || 3000;
const app = express();

app.get('/compareMadrid', async (req,res) => {
    if(!req.query.city){
        console.log('ehh que la ciudad no existe')
        return res.json(handleErrors.invalid)
    } else {
        let tempDiff = await compare.compareTemperatures("Madrid",req.query.city)
        return res.json(tempDiff)
    }

})
app.get('/compareCities', async(req,res) => {
    if(!req.query.city1 || !req.query.city2){
        console.log('ehh que la ciudad no existe')

        return res.json(handleErrors.invalid)
    } else {
        let tempDiff = await compare.compareTemperatures(req.query.city1,req.query.city2)
        return res.json(tempDiff)
    }

})

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
})

