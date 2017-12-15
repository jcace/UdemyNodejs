
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			descibe: "Address to fetch weather for",
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`The temperature currently is ${weatherResults.temperature}, apparently is ${weatherResults.apparentTemperature}`);
			}
		});
	}
});

// lat, lng, callback
