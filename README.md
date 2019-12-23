# node-weather-module


This is a small node module to compare the temperatures between two cities.
In this project we can use 2 endpoints to compare weather temperatures
/compareMadrid to compare the weather between Madrid and other city
/compareCities tom compare the weather between two cities

Open Weather Map Api is used to obtain the temperature of the cities. To use this api, is necessary to get an api key.
You can get your's here:

https://openweathermap.org/appid#get




### Dependencies:

The project need the following dependencies:

Express: Very usefull node library, used here to create our Api
Axios: Necessary for the request to Open Weather Map Api
Dotenv: Necessary to acess .env file info

Dev dependencies:

nodemon: Restarts the server when it detect changes



### Installing the project:

To run the project you just need to install all the dependences

```
npm install

```

Create your own .env file with your api key and the port you want to use.


To run the server you just need to write

```
npm start

```

You don't need to repeat this with every change you make, nodemon make this for you.


### Comparing the weather - Endpoints

You can compare temperatures between Madrid and any other city using the following endpoint:

```
/compareMadrid?city=barcelona

```

Also, you can compare temperatures between two different cities usin the following endpoint:

```
/compareCities?city1=barcelona&city2=london

```

If the cities are valid, the response would be similar to this:

```
{
  "HttpStatusCode": "200",
  "result": {
    "weatherInfoResult": {
      "warmerCityName": "barcelona",
      "warmerCityTemperature": 11.5,
      "colderCityName": "Madrid",
      "colderCityTemperature": 6.96,
      "difference": "4.54"
    }
  }
}

```

If some city is invalid the response would be:

```
{
  "HttpStatusCode": 422,
  "error": {
    "Type": "Invalid City",
    "Message": "City name is invalid or does not exist."
  }
}

```

### About the project

Project structure:

Controllers:
    - apiRequest: Here you can find the request to Open Weather Maps Api
    - compare: all comparison logic
Handlers:
    - responseHandler: It includes an object with all posible responses
server.js: The code included here inits the server and manage routes

### Version

Current version is 1.0.0