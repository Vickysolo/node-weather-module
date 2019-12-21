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
            return difference
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