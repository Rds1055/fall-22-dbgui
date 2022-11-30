const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/:username', async (req, res, next) => {
    const userByName = await req.models.user.fetchUsersByName(req.query.username);
    res.json(userByName);
    next();
});
router.get('/', async (req, res, next) => {
    const allUsers = await req.models.user.fetchAllUsers();
    res.json(allUsers);
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
 router.put('/', async (req, res, next) => {
    const updateUser = await req.models.user.updateUsername(req.body.username, req.body.user_id);
    res.json(updateUser);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updatePass = await req.models.user.updatePassword(req.body.username, req.body.pword);
    res.json(updatePass);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateEmail = await req.models.user.updateEmail(req.body.username, req.body.email);
    res.json(updateEmail);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteUser = await req.models.user.deleteUser(req.body.user_id);
    res.status(204).end();
    next();
 });
module.exports = router;