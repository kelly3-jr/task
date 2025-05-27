const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const storeData = [];

//GET /Data
app.get('/data', (req,res) =>
{
    res.json(storeData);
});
//POST /data
app.post('/data',  (req,res) =>
{
    const newData = req.body;
    storeData.push(newData);

    res.status(201).json({message: 'Data added succesfully', data : newData});

});

app.listen(PORT, ()=>
{
    console.log(`server listening on port ${PORT}`);
    
});


