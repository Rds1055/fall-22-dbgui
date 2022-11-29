const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/title/:title', async (req, res, next) => {
    const postByName = await req.models.post.fetchPostsByName(req.params.title);
    res.json(postByName);
    next();
});
router.get('/user/:user_id', async (req, res, next) => {
    const postByUser = await req.models.post.fetchPostsByUser(req.params.user_id);
    res.json(postByUser);
    next();
});
router.get('/channel/:channel_id', async (req, res, next) => {
    const postByChannel = await req.models.post.fetchPostsByChannel(req.params.channel_id);
    res.json(postByChannel);
    next();
});
router.get('/:post_id', async (req, res, next) => {
    const postById = await req.models.post.fetchPostsById(req.params.post_id);
    res.json(postById);
    next();
});
router.get('/', async (req, res, next) => {
    const allPosts = await req.models.post.fetchAllPosts();
    res.json(allPosts);
    next();
});
router.post('/', async (req, res, next) => {
    const createPost = await req.models.post.createPost(req.body.user_id, req.body.channel_id, req.body.title, req.body.contents);
    res.status(201).json(createPost);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updatePost = await req.models.post.updatePostName(req.body.title, req.body.post_id);
    res.json(updatePost);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deletePost = await req.models.post.deletePost(req.body.post_id);
    res.status(204).end();
    next();
 });
module.exports = router;