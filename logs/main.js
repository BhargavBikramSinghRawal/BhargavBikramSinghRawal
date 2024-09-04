const readFile = require('./read');
const writeFile = require('./write');
writeFile('data.txt', 'Hello Everyone!');
readFile('data.txt');