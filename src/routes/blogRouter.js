const express = require('express');
const addNewBlog = require('../controller/blog/addNewBlog');
const postBlog = require('../controller/blog/postBlog');
const multer = require('multer');
const comment = require('../controller/blog/comment')
const blogId = require('../controller/blog/blogId');
const storage = require('../controller/blog/storage');
const router = express.Router();

router.get('/add-new', addNewBlog);
router.get('/:id', blogId); 

const upload = multer({ storage: storage });

router.post('/', upload.single('coverImage'), postBlog);
router.post('/comment/:blogId',comment);

module.exports = router;
