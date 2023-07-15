require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const users = require('./routes/userRouter')
const checkForAuthenticationCookie = require('./middleware/checkAuth')

app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.PORT}`)
})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to db')
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))
app.use(express.static(path.join(__dirname,'/public')))


 app.use('/users',users)

 app.get('/',(req,res)=>{
    res.render('home')
})