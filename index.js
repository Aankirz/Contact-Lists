//After doing npm install express We can now use the express module to create our server.
const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('viewengine','ejs');
app.set('views',path.join(__dirname,'views'));


app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
        return;
    }
    console.log('Server is up and running on port',port);
})