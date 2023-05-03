const fs = require("fs");
const fileName = "notes.json";

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync(fileName);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON).notes;
  } catch (error) {
    return [];
  }
}

function addNoteJSON(title, message) {
  const notes = loadNotes();
  const newNotes = [...notes, { title, message }];
  fs.writeFileSync(fileName, JSON.stringify({ notes: newNotes }));
}

function removeNoteJSON(title) {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync(fileName, JSON.stringify({ notes: newNotes }));
}

const handlerMapper = {
  add: addNoteJSON,
  remove: removeNoteJSON,
};

module.exports = {
  addNoteJSON,
  removeNoteJSON,
  handlerMapper,
};
