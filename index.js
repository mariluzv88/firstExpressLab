const express = require("express")

const app = express()
const random = require('./models/responses')


 
  app.get('/greeting/:name',(req,res)=>{
      res.send(`Wow! Hello There,${req.params.name}`)
    })
    app.get("/tip/:total/:tipPercentage",(req,res)=>{
        res.send(`The tip is ${req.params.tipPercentage}`)
    })
    // let random = response[Math.floor(Math.random()*response.length)]
app.get('/magic/:question',(req,res)=>{
    res.send(`${req.params.question},<h1>${random}</h1>`)
    
    // res.render("Response",{response:random})
    // res.send(random)
    // ,${random}
})

app.listen('3000',(req,res)=>{
    console.log("Port on 3K")
})



