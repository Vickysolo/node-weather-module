const axios = require('axios');
const dotenv = require('dotenv').config();
const handleErrors = require('./handleErrors');


let apiRequest = {
  getTemperature: async (city) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`;
    try {
      const response = await axios.get(url);
      let temp = response.data.main.temp
      return temp
    } catch (error) {
      console.log(error.response.status)
      if (error.response.status == 404){
        return handleErrors.invalid
      } else {
        return handleErrors.server(error.response)
      } 
    }
  }
}

module.exports = apiRequest;