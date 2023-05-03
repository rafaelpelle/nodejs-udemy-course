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

const {command, title, message} = yargs.argv;

const handler = handleMapper[command];

if (handler) {
  handler(title, message);
}
