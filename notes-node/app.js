console.log("starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require("./notes.js");

const argv = yargs.argv;

command = argv._[0];
console.log("command: ", command);
console.log('Yargs', argv);

if (command === 'add')
{
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
}
else {
	console.log('Command not recognized');
}

