require('dotenv').config();
const express=require("express"); 
const app= express(); 

//Mounted on API
app.use('/api', require('./api'));

//server
const PORT = 8080;
//server run func 
const serverRun = () => {
    const server = app.listen(PORT, () => {
        console.log(`Live on port: ${PORT}`);
    });
};

serverRun();