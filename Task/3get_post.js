const express = require('express');
const fs = require('fs');
const app = express();
require ('dotenv').config();
const PORT = process.env.PORT || 5000;

//const PORT = 3000;
app.use(express.json());

const data_file = './data.json';

function readDataFromFile(){
    try{
        const fileData = fs.readFileSync(data_file, 'utf-8');
        return JSON.parse(fileData);
    }catch(err){
        return [];

    }
}

function writeDataToFile(data){
    fs.writeFileSync(data_file, JSON.stringify(data, null, 2), 'utf-8')
}

//GET /Data
app.get('/data', (req,res) =>
{
    const data = readDataFromFile();
    res.json(data);
});
//POST /data
app.post('/data',  (req,res) =>
{
    const newData = req.body;
    const data = readDataFromFile();
    data.push(newData);
    writeDataToFile(data);


    res.status(201).json({message: 'Data added succesfully', data : newData});

});

app.listen(PORT, ()=>
{
    console.log(`server listening on port ${PORT}`);
    
});