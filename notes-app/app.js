const fs = require("fs");
const yargs = require("yargs");

const fileName = "notes.json";

// function addNote(title, message) {
//   fs.writeFileSync(title, message);
// }

// function removeNote(title) {
//   fs.unlinkSync(`${__dirname}/${title}`);
// }

function addNoteJSON(title, message) {
  const content = JSON.parse(fs.readFileSync(fileName));
  content.notes.push({ title, message });
  fs.writeFileSync(fileName, JSON.stringify(content));
}

function removeNoteJSON(title) {
  const content = JSON.parse(fs.readFileSync(fileName));
  content.notes = content.notes.filter((note) => note.title !== title);
  fs.writeFileSync(fileName, JSON.stringify(content));
}

const handlerMapper = {
  add: addNoteJSON,
  remove: removeNoteJSON,
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

const handler = handlerMapper[command];
handler(title, message);
