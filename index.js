//After doing npm install express We can now use the express module to create our server.
const { name } = require('ejs');
const express=require('express');

const path=require('path');


const port=8000;

const app=express();//firing up the server

app.set('view engine','ejs');//setting up the view engine
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList=[
    {
        name:'John',
        phone:'1234567890',
    },
    {
        name:'Jane',
        phone:'1234567890',
    }
]

app.get('/',function(req,res){// Setting up the template engine
    return res.render('home',{
        //here everything you want to display has to be written in js code
       title:"Contact List",
       contact_List:contactList

    })
})

app.post('/create-contact',function(req,res){
    //post is used to write set of functions to do something with the data collected from the user
    contactList.push(req.body);
    return res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server',err);
        return;
    }
    console.log('Server is up and running on port',port);
})
