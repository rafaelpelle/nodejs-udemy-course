const fs = require("fs");
const yargs = require("yargs");

function addNote(title, message) {
  fs.writeFileSync(title, message);
}

function removeNote(title) {
  fs.unlinkSync(`${__dirname}/${title}`);
}

const handleMapper = {
  add: addNote,
  remove: removeNote,
};

const { command, title, message } = yargs.argv;

if (!title) {
  console.log('parameter "title" is required.');
} else if (!(command === "add" || command === "remove")) {
  console.log(
    'The "command" parameter is required and can be either "add" or "remove".'
  );
} else if (command === "add" && !message) {
  console.log('parameter "message" is required to add a new note.');
}

const handler = handleMapper[command];
handler(title, message);
