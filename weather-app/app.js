require("dotenv").config();
const request = require("request");

const { WEATHER_API_KEY } = process.env;
const WEATHER_API_URL = "http://api.weatherstack.com/current";

request(
  {
    url: `${WEATHER_API_URL}?access_key=${WEATHER_API_KEY}&query=Florianopolis`,
  },
  (error, response) => {
    const { location, current } = JSON.parse(response.body);
    console.log({ location, current });
  }
);
