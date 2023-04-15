require('dotenv').config()
const express=require("express")
const app=express()
const port=process.env.PORT || 6000;
const expressLayouts=require('express-ejs-layouts')
const db=require('./config/mongoose')
app.use(express.static('./assets'))
app.use(expressLayouts);
app.use(express.urlencoded());
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs')
app.set('views','./views')
app.use('/', require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`)
    }
    console.log(`server is running on port : ${port}`)
})