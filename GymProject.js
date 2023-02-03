//Import Module
const express = require('express');
const app = express(); 
const port = 3000;
const path = require('path');

app.use('/static', express.static('static')) //Help to server static file like css and images file
app.use(express.urlencoded()) //its helping to get data for form 

//serving request and respones on html
app.get('/', (req , res)=>{
    res.sendFile(path.join(__dirname,'./GymProject.html'));
})

//getting data of form by post method 
app.post('/', (req, res) => {
    console.log(req.body); //write data in console 
    res.send('Form Submitted!');
});

app.listen(port ,()=>{
    console.log(`App is Now Listening on port http://localhost:${port}`)
})
