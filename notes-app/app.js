const fs = require('fs');

fs.writeFileSync('file.txt', 'My name is Rafael.');
fs.appendFileSync('file.txt', ' My last name is Pelle.');