const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }
  console.log(data);
});
