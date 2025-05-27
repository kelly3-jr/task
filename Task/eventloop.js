
const { log } = require('console');
const fs = require('fs');
console.log('start reading ...');

fs.readFile('data.json', 'utf-8', (err, data) =>{
if(err){
   return console.error('Error:', err);

}
console.log('file data:', data);

});
console.log('reaing initializedd...');


//set Timeout
console.log('1. Start');

setTimeout(() => {
  console.log('3. Inside setTimeout (after 2 seconds)');
}, 2000);

console.log('2. End');


 