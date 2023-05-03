const yargs = require("yargs");
const { handlerMapper } = require("./handlers");
const { argsAreValid } = require("./validation");

const { command, title, message } = yargs.argv;

if (argsAreValid(command, title, message)) {
  const handler = handlerMapper[command];
  handler(title, message);
}
