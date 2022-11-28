const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/user/:user_id', async (req, res, next) => {
    try {
        const commentByUser = await req.models.comment.fetchCommentsByUser(req.params.user_id);
        res.status(200).json(commentByUser);
    } catch (err) {
        console.error("Failed to get comments:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/post/:post_id', async (req, res, next) => {
    try {
        const commentByPost = await req.models.comment.fetchCommentsByPost(req.params.post_id);
        res.status(200).json(commentByPost);
    } catch (err) {
        console.error("Failed to get comments:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/', async (req, res, next) => {
    try {
        const allComments = await req.models.comment.fetchAllComments();
        res.status(200).json(allComments);
    } catch (err) {
        console.error("Failed to get comments:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/:comment_id', async (req, res, next) => {
    try {
        const commentById = await req.models.comment.fetchCommentsById(req.params.comment_id);
        res.status(200).json(commentById);
    } catch (err) {
        console.error("Failed to get comments:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.post('/', async (req, res, next) => {
    try {
        const createComment = await req.models.comment.createComment(req.body.user_id, req.body.post_id, 
            req.body.contents, req.body.parent);
        res.status(201).json(createComment);
    } catch (err) {
        console.error("Failed to create comment:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.put('/', async (req, res, next) => {
    try {
        const updateComment = await req.models.comment.updateComment(req.body.contents, req.body.comment_id);
        res.status(200).json(updateComment);
    } catch (err) {
        console.error("Failed to update comment:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.delete('/', async (req, res, next) => {
    try {
        const deleteComment = await req.models.comment.deleteComment(req.body.comment_id);
        res.status(204).end();
    } catch (err) {
        console.error("Failed to delete comment:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
module.exports = router;