const express = require('express');
const dotenv = require('dotenv').config();
const apiRequest = require('./controllers/apiRequest');

const port = process.env.PORT || 3000;
const app = express();

app.get('/compareMadrid', async (req,res) => {
    if(!req.query.city){
        return res.json({error:'city not found'})
    } else {
        console.log('vamos')
        apiRequest.getTemperature(req.query.city).then((response)=>{
            return res.json(response)
  })}
})

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
})