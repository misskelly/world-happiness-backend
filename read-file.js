const csvjson = require('csvjson');
const readFile = require('fs').readFile;
// const fs = require('fs');
readFile('./', 'utf-8', (err, fileContent) => {
  if (err) {
    console.log(err); // Do something to handle the error or just throw it
    throw new Error(err);
  }
  const jsonObj = csvjson.toObject(fileContent);
  console.log(jsonObj);
  // fs.writeFile('./whr-data.json', JSON.stringify(jsonObj), (err) => {
  //   if(err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log('I did it!')
  // })
});