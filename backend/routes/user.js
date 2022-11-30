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
    try {
        const updatePass = await req.models.user.updatePassword(req.body.username, req.body.pword);
        res.status(200).json(updatePass);
    } catch (err) {
        console.error('Failed to update user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.delete('/', async (req, res, next) => {
    try {
        const deleteUser = await req.models.user.deleteUser(req.body.user_id);
    res.status(204).end();
    } catch (err) {
        console.error('Failed to delete user:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
module.exports = router;