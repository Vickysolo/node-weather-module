const apiRequest = require('./apiRequest');
const responseHandler = require('./responseHandler');

let compare = {
    compareTemperatures: async (firstCity,secondCity)=>{
        let firstCityTemp = await apiRequest.getTemperature(firstCity);
        let secondCityTemp = await apiRequest.getTemperature(secondCity);
        if(typeof(firstCityTemp) != "number" && typeof(secondCityTemp) != "number"){
            return responseHandler.invalid;
        }
        let difference = Math.abs(firstCityTemp - secondCityTemp);
        let weatherInfo;
        if (firstCityTemp > secondCityTemp) {
            weatherInfo = {
                warmerCityName: firstCity,
                warmerCityTemperature: firstCityTemp,
                colderCityName: secondCity,
                colderCityTemperature: secondCityTemp,
                difference: difference
            }
        } else {
            weatherInfo = {
                warmerCityName: secondCity,
                warmerCityTemperature: secondCityTemp,
                colderCityName: firstCity,
                colderCityTemperature: firstCityTemp,
                difference: difference
            }
        }
        var sendJsonResult = responseHandler.valid(weatherInfo);
        return sendJsonResult;
    }
}

module.exports = compare;