const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost/portalDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
})


const User = new mongoose.model("User", userSchema)



app.post('/', (req,res)=>{
    res.send("Hello")
    res.end()
})



app.post('/getdata',(req,res)=>{
    console.log(req.body)
    
    const {title ,description , code} = req.body
    const user = new User({
        title:title,
        description:description,
        code:code
    })
    user.save( err =>{
        if(err){
            res.send(err)
        }
        else{
            res.send({ message: "succesfully updated"})
        }
    })
})

app.listen(5004,()=>{
    console.log("port running on 5004")
})

