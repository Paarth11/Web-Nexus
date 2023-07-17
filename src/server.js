require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const users = require('./routes/userRouter')
const blogs = require('./routes/blogRouter')
const cookieParser = require('cookie-parser')
const checkForAuthenticationCookie = require('./middleware/checkAuth')
const Blog = require('./models/blog')

app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.PORT}`)
})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to db')
})

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))
app.use(express.static(path.join(__dirname,'/public')))

 app.use('/users',users)
 app.use('/blogs',blogs)
 

 app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render('home', {
      user: req.user, 
      blogs: allBlogs,
  
    });
  });
  