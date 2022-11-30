const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/:username', async (req, res, next) => {
    try {
        const userByName = await req.models.user.fetchUsersByName(req.params.username);
        res.status(200).json(userByName);
    } catch (err) {
        console.error('Failed to get user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/', async (req, res, next) => {
    try {
        const allUsers = await req.models.user.fetchAllUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        console.error('Failed to get users:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get("/posts/:username", async(req, res, next) => {
    try {
        const posts = await req.models.user.fetchUserPosts(req.params.username);
        res.status(200).json(posts);
    } catch (err) {
        console.error('Failed to get user posts:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get("/posts/likes/:username", async(req, res, next) => {
    try {
        const posts = await req.models.user.fetchUserPostLikes(req.params.username);
        res.status(200).json(posts);
    } catch (err) {
        console.error('Failed to get user post likes:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get("/comments/:username", async(req, res, next) => {
    try {
        const posts = await req.models.user.fetchUserComments(req.params.username);
        res.status(200).json(posts);
    } catch (err) {
        console.error('Failed to get user comments:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get("/comments/likes/:username", async(req, res, next) => {
    try {
        const posts = await req.models.user.fetchUserCommentLikes(req.params.username);
        res.status(200).json(posts);
    } catch (err) {
        console.error('Failed to get user comment likes:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await req.models.user.createUser(body.username, body.email, body.password);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.put('/:username', async (req, res, next) => {
    try {
        const updateUser = await req.models.user.updateUser(req.params.username, req.body);
        res.status(200).json(updateUser);
    } catch (err) {
        console.error("Failed to update post:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.delete('/:username', async (req, res, next) => {
    try {
        const deleteUser = await req.models.user.deleteUser(req.params.username);
        res.status(204).end();
    } catch (err) {
        console.error('Failed to delete user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
module.exports = router;