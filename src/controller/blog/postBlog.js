const Blog = require('../../models/blog')

const postBlog = async(req,res)=>{
    const {title,body} = req.body
    const blog = await Blog.create({
        body,title,
        createdBy: req.user._id,
        coverImageURL: ''
    });
    return res.redirect('/blogs/${blog.id')
}

module.exports = postBlog 