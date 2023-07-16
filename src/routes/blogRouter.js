
const express = require('express');
const addNewBlog = require('../controller/blog/addNewBlog');
const blogId = require('../controller/blog/blogId');
const multer = require('multer');
const storage = require('../controller/blog/storage');
const postBlog = require('../controller/blog/postBlog');
const router = express.Router()


router.get('/add-new',addNewBlog)
router.get('/id:',blogId)
const upload = multer({storage:storage})
router.post('/',upload.single('coverImage'),postBlog)





module.exports = router ;