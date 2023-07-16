const comment = require("../../models/comment");

const cmt = async (req, res) => {
    await Comment.create({
      content: req.body.content,
      blogId: req.params.blogId,
      createdBy: req.user._id,
    });
    return res.redirect(`/blogs/${req.params.blogId}`);
  };
  module.exports = cmt;
  