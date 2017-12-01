const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=697+hawkwood+blvd+nw+calgary',
	json: true
}, (error, response, body) => {
	console.log(body);
});