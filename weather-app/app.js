const request = require('request');
// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			descibe: "Address to fetch weather for",
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help','h')
// 	.argv;

// console.log(argv);

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

request( { url: 'https://api.darksky.net/forecast/c369dfc5457aa7a54bc6ca0ad20d2ef1/-51,114',
	json: true,
}, 
(error,response,body) => {
	if (error) {
		console.log("Unable to connect to Forecast.io servers");
	} else if (response.statusCode === 400) 
	{
		console.log("Unable to fetch weather.");
	}
	else if (response.statusCode === 200) {
		console.log(body.currently.temperature);
	}
});


//c369dfc5457aa7a54bc6ca0ad20d2ef1

