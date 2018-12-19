const express = require("express")
const app=express()
const path=require('path')
//Extension par defaut des vus = ejs
app.set('view engine','html')

//dossier des données static
const port=3000
const post = require('./server/routes/post')

app.use('/post',post)



app.listen(port,function(){
console.log("serv run !...")
})

app.get('/', function (req, res) {
  res.sendFile('../myappFront/index');
})
