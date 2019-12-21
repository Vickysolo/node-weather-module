const apiRequest = require('./apiRequest');


let compare = {

    compareTemperatures:async(city1,city2)=>{
        let cityOne = await apiRequest.getTemperature(city1)
        let cityTwo = await apiRequest.getTemperature(city2)
        let difference = Math.abs(cityOne - cityTwo);
        return difference
    }}

module.exports = compare;