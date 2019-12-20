const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
})