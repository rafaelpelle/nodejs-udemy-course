const fs = require('fs');
const messages = require('./messages');

const fileName = 'file.txt';
const {message1, message2} = messages;

fs.writeFileSync(fileName, message1);
fs.appendFileSync(fileName, message2);