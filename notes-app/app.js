const fs = require('fs');
const validator = require('validator');
const messages = require('./messages');

const fileName = 'file.txt';
const {message1, message2} = messages;
fs.writeFileSync(fileName, message1);
fs.appendFileSync(fileName, message2);
fs.appendFileSync(fileName, process.argv[2]);

const email1 = 'rafapelle@gmail.com';
const email2 = 'gmail.com';
console.log(email1, validator.isEmail(email1));
console.log(email2, validator.isEmail(email2));
