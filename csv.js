const fs = require('fs');
const csv = require('fast-csv');
let csvData=[]
let counter =0;
fs.createReadStream('file.csv')
.pipe(csv.parse())
.on('data',(row)=>{
    csvData.push(row);
    counter++;
    if(counter >= 100) {
        return false;
    }
})
.on('end', () => {
    console.log(csvData);
});




