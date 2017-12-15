const request = require('request');

var getWeather = (lat, lng, cb) => {
    request( { url: `https://api.darksky.net/forecast/c369dfc5457aa7a54bc6ca0ad20d2ef1/${lat},${lng}`,
    json: true,
    }, 
    (error,response,body) => {
    if (error) {
        cb("Unable to connect to Forecast.io servers");
    } else if (response.statusCode === 400) 
    {
        cb("Unable to fetch weather.");
    }
    else if (response.statusCode === 200) {
        cb(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature,
        });
        }
    });
}

module.exports.getWeather = getWeather;