const axios = require('axios');
const dotenv = require('dotenv').config();


let apiRequest = {
  getTemperature: async (city) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
      if (error.response.data.cod == '404'){
        return {
          code:"404",
          msg: `the requested city ${city} could not be found, please try again`
        }    
      } else {
        return {
          code:"500",
          msg: `server error`
        }
      } 
    }
  }
}

module.exports = apiRequest;