const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
// const { stringify } = require('nodemon/lib/utils');
const jwt = require('jsonwebtoken')
jwtKey = "jwt"
const session = require('session')
const passport = require('passport-http-bearer');
const strategyLocal = require('passport-local')
const bodyParser= require('body-parser');
const jsonParser= bodyParser.json()
const crypto = require('crypto')
// const key="password";
// const algo = "aes256"
// const { Session } = require('inspector');

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost/portalDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const entrySchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
    
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token:String

})


const User = new mongoose.model("users", userSchema)
const Entry = new mongoose.model("entries", entrySchema)



const generateToken = (name)=>{
    return jwt.sign({name },jwtKey,{expiresIn:'30d'})

}
// app.use(passport.initialize());
// app.use(passport.session());


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));
// app.post('/', (req, res) => {
//     res.send("Hello")
//     res.end()
// })



app.post('/form', (req, res) => {
    console.log(req.body)

    const { title, description, code } = req.body
    const entry = new Entry({
        title: title,
        description: description,
        code: code
    })
    entry.save(err => {
        // jwt.sign({result},jwtKey,{expiresIn='500s'},(err,token)=>{
        //     res.json({token})
        // })
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "succesfully updated" })
        }
    })
})

app.post('/login',(req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    User.findOne({ email: email }, (err, users) => {
        if (users) {
            if (password === users.password) {
               
                res.send({message:"successfully loged in"})
            } else {
                res.send("Check Password")
            }
        } else {
            res.send("user not found")
        }
    })

app.post('/register', (req, res) => {
    // var cipher= crypto.createCipheriv(algo,key)
    // var encrypted = cipher.update(req.body.password, 'utf-8','hex')
    // *cipher.final('hex');
    console.log(req.body)
    const { name, email, password, } = req.body
    const user = new User({
        name: name,
        email: email,
        password: password,
        
    })
    user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.json(user.token)

            }
        }
    )



})

app.listen(5004, () => {
    console.log("port running on 5004")
})

