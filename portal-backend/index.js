const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')


const app = express()
app.use(express.json())
// app.use(express.urlencoded)
app.use(cors())

app.get('/', (req,res)=>{
    res.send("Hello")
    res.end()
})



app.get('/getdata',(req,res)=>{
    res.send('hey')
    res.end()
})

app.listen(5004)