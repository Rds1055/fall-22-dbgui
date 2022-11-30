const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/user/:user_id', async (req, res, next) => {
    const commentByUser = await req.models.comment.fetchCommentsByUser(req.params.user_id);
    res.json(commentByUser);
    next();
});
router.get('/post/:post_id', async (req, res, next) => {
    const commentByPost = await req.models.comment.fetchCommentsByPost(req.params.post_id);
    res.json(commentByPost);
    next();
});
router.get('/', async (req, res, next) => {
    const allComments = await req.models.comment.fetchAllComments();
    res.json(allComments);
    next();
});
router.get('/:comment_id', async (req, res, next) => {
    const commentById = await req.models.comment.fetchCommentsById(req.params.comment_id);
    res.json(commentById);
    next();
});
router.post('/', async (req, res, next) => {
    const createComment = await req.models.comment.createComment(req.body.user_id, req.body.post_id, 
        req.body.contents, req.body.parent);
    res.status(201).json(createComment);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateComment = await req.models.comment.updateComment(req.body.contents, req.body.comment_id);
    res.json(updateComment);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteComment = await req.models.comment.deleteComment(req.body.comment_id);
    res.status(204).end();
    next();
 });
module.exports = router;