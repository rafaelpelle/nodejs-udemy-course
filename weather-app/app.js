require("dotenv").config();
const request = require("request");

const { WEATHER_API_KEY } = process.env;
const WEATHER_API_URL = "http://api.weatherstack.com/current";
const query = process.argv[2];

request(
  {
    url: `${WEATHER_API_URL}?access_key=${WEATHER_API_KEY}&query=${query}`,
    json: true,
  },
  (error, response) => {
    if (error || response.body.error) {
      console.log("Something went wrong!!");
      console.error(error || response.body.error);
    } else {
      const { location, current } = response.body;
      console.log({ location, current });
    }
  }
);
