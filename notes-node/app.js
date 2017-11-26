// node --inspect-brk app.js
// chrome://inspect -> Open Dedicated DevTools for Node
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
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Note added!");
		notes.logNote(note);
	}
	else
		console.error("Note duplicate! Did not add");
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);

	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var noteRead = notes.getNote(argv.title);

	if (noteRead)
	{
		console.log("Note found!");
		notes.logNote(noteRead);
	}
	else {
		console.log("Note not found!");
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note removed!" : "Note not found";
	console.log(message);
}
else {
	console.log('Command not recognized');
}

