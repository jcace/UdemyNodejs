console.log('Starting App');

setTimeout(() => {
	console.log("Inside Callback");
}, 2000);

setTimeout(() => {
	console.log("zero delay!");
}, 0)

console.log('Finishing Up');