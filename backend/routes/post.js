const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/title/:title', async (req, res, next) => {
    try {
        const postByName = await req.models.post.fetchPostsByName(req.params.title);
        res.status(200).status(200).json(postByName);
    } catch (err) {
        console.error("Failed to get posts:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/user/:user_id', async (req, res, next) => {
    try {
        const postByUser = await req.models.post.fetchPostsByUser(req.params.user_id);
        res.status(200).json(postByUser);
    } catch (err) {
        console.error("Failed to get posts:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/channel/:channel_id', async (req, res, next) => {
    try {
        const postByChannel = await req.models.post.fetchPostsByChannel(req.params.channel_id);
        res.status(200).json(postByChannel);
    } catch (err) {
        console.error("Failed to get posts:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/:post_id', async (req, res, next) => {
    try {
        const postById = await req.models.post.fetchPostsById(req.params.post_id);
        res.status(200).json(postById);
    } catch (err) {
        console.error("Failed to get posts:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/', async (req, res, next) => {
    try {
        const allPosts = await req.models.post.fetchAllPosts();
        res.status(200).json(allPosts);
    } catch (err) {
        console.error("Failed to get posts:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.post('/', async (req, res, next) => {
    try {
        const createPost = await req.models.post.createPost(req.body);
        res.status(201).json(createPost);
    } catch (err) {
        console.error("Failed to create post:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.put('/', async (req, res, next) => {
    try {
        const updatePost = await req.models.post.updatePost(req.body.title, req.body.contents, req.body.post_id);
        res.status(200).json(updatePost);
    } catch (err) {
        console.error("Failed to update post:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.delete('/', async (req, res, next) => {
    try {
        const deletePost = await req.models.post.deletePost(req.body.post_id);
        res.status(204).end();
    } catch (err) {
        console.error("Failed to delete post:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
module.exports = router;