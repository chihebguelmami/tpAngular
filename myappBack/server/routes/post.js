const express = require("express");
const router=express.Router();
const axios =require ("axios");

const data ='https://jsonplaceholder.typicode.com/posts'

router.get('/',(req,res)=>{
    res.send('POST WORKS');
    axios.get(`${data}`).then(posts=>{
    	console.log(posts.data);
    });
});
module.exports=router;