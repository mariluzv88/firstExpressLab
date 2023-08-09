const express = require("express")

const app = express()

app.get('/greeting/:name',(req,res)=>{
  res.send(`Wow! Hello There,${req.params.name}`)
})
app.get("/tip/:total/:tipPercentage",(req,res)=>{
  res.send(`The tip is ${req.params.tipPercentage}`)
})

app.listen('3000',(req,res)=>{
    console.log("Port on 3K")
})



