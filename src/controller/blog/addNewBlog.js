const addNewBlog = (req,res)=>{
    res.render('addBlog',{
        user: req.user
    })
}

module.exports = addNewBlog