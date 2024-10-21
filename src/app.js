const express=require('express');

const app=express();
app.use((req,res)=>
{
    res.status(200).send("Page  Found")
 });

app.listen(4000,()=>
{
    console.log("listening on 4000")
})


