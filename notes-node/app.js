console.log("starting app.js");

const fs = require('fs');
const os = require('os');

const notes = require("./notes.js");

var result = notes.add(2,43);
console.log(result);

// var user = os.userInfo;
//fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

