var express = require('express');
var router = express.Router();

// Get users listing
// create new user
router.post('/', async(req, res, next) => {
    try {
        const body = req.body;
        const result = await req.models.user.createNewUser(body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Account creation failure:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

// find user by username
router.get('/:username', async(req, res, next) => {
    try {
        const user = req.params.username;
        const result = await req.models.user.getByUsername(user);
        res.status(200).json(result);
    } catch (err) {
        console.error('User not found:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

// find all users
router.get('/', async(req, res, next) => {
    try {
        const result = await req.models.user.getAllUsers();
        res.status(200).json(result);
    } catch (err) {
        console.error('User not found:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

// update user info
router.put('/:username', async (req, res, next) => {
    try {
        const user = req.params.username;
        const body = req.body;
        const result = await req.models.user.updateData(user, body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Login failure:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
  
module.exports = router;