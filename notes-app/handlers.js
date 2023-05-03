const fileName = "notes.json";

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

module.exports = {
  addNoteJSON,
  removeNoteJSON,
  handlerMapper,
};
