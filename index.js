//After doing npm install express We can now use the express module to create our server.
const express=require('express');
const { get } = require('http');
const path=require('path');
const port=8000;

const app=express();//firing up the server

app.set('viewengine','ejs');//setting up the view engine
app.set('views',path.join(__dirname,'views'));

var contactLists=[
    {
        name:'John',
        phone:'1234567890',
    },
    {
        name:'Jane',
        phone:'1234567890',
    }
]

app,get('/',function(req,res){
    return res.render('index',{
        //here everything you want to display has to be written in js code
       title:"Contact List",
       contact_List:contactLists

    })
})
app.get('/home',function(req,res){ //Setting up the template engine
   return res.render('home',{
         title:'Home Page',
   })

})

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
        return;
    }
    console.log('Server is up and running on port',port);
})