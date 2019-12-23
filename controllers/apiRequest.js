const axios = require('axios');
const dotenv = require('dotenv').config();
const responseHandler = require('../handlers/responseHandler');


let apiRequest = {
    getTemperature: async (city) => {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.API_KEY}`;
        try {
            const response = await axios.get(url);
            let temperature = response.data.main.temp
            return temperature
        } catch (error) {
            if (error.response.status == 404){
                return responseHandler.invalid
            } else {
                return responseHandler.serverError(error.response)
            } 
        }
    }
}

module.exports = apiRequest;