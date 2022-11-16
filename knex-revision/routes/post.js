const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/current', async (req, res, next) => {
   if (req.query.title) {
       const postByName = await req.models.post.fetchPostsByName(req.query.title);
       res.json(postByName);
       next();
   } else if(req.query.user_id){
        const postByUser = await req.models.post.fetchPostsByUser(req.query.user_id);
        res.json(postByUser);
        next();
   }else {
       const allPosts = await req.models.post.fetchAllPosts();
       res.json(allPosts);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createPost = await req.models.post.createPost(req.body.user_id, req.body.channel_id, 
        req.body.title, req.body.contents);
    res.status(201).json(createPost);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updatePost = await req.models.post.updatePost(req.body.title, req.body.contents, req.body.post_id);
    res.json(updatePost);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deletePost = await req.models.post.deletePost(req.body.post_id);
    res.status(204).end();
    next();
 });
module.exports = router;