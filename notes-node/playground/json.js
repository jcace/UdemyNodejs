// var obj = {
// 	name: 'jason'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name": "jadson", "Age": 23}';

// var person = JSON.parse(personString);

// console.log(person.name);

const fs = require('fs');

var originalNote = {
	title:"Some title",
	body: "some Body"
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("test.json", originalNoteString);

var noteString = fs.readFileSync('test.json');

var note = JSON.parse(noteString);

console.log(typeof(note));
console.log(note.title);