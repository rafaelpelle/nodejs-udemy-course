function argsAreValid(command, title, message) {
  if (!title) {
    console.log('parameter "title" is required.');
    return false;
  }

  if (!(command === "add" || command === "remove")) {
    console.log(
      'The "command" parameter is required and can be either "add" or "remove".'
    );
    return false;
  }

  if (command === "add" && !message) {
    console.log('parameter "message" is required to add a new note.');
    return false;
  }

  return true;
}

module.exports = {
  argsAreValid,
};
