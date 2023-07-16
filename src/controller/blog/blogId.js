const Blog = require('../../models/blog');

const blogId = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('createdBy');

  return res.render('blog', {
    user: req.user,
  });
};

module.exports = blogId;
