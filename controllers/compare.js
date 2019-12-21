const apiRequest = require('./apiRequest');
const handleErrors = require('./handleErrors');


let compare = {
    compareTemperatures: async (city1,city2)=>{
        try{
            let cityOne = await apiRequest.getTemperature(city1)
            let cityTwo = await apiRequest.getTemperature(city2)
            console.log(cityTwo)
            if(typeof(cityOne) == "number" && typeof(cityTwo)== "number"){
                let difference = Math.abs(cityOne - cityTwo);
                let weatherInfo
                if (cityOne > cityTwo) {
                    weatherInfo = {
                        warmerCityName: city1,
                        warmerCityTemperature: cityOne,
                        colderCityName: city2,
                        colderCityTemperature: cityTwo,
                        difference: difference
                    }
                } else {
                    weatherInfo = {
                        warmerCityName: city2,
                        warmerCityTemperature: cityTwo,
                        colderCityName: city1,
                        colderCityTemperature: cityOne,
                        difference: difference
                    }
                }
                var sendJsonResult = handleErrors.valid(weatherInfo)
            return sendJsonResult
            }
            else {console.log('pues hay un error')
                return handleErrors.invalid
            }
        } catch (error){
            console.log('error')
            console.log(error)
        }
    }}

module.exports = compare;