var express = require('express');
var router = express.Router();

/* GET users listing. */
// create new user
router.post('/', async(req, res, next) => {
    try {
        const body = req.body;
        const result = await req.models.user.createNewUser(body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create account:', err);
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
        console.error('Failed to find user:', err);
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
        console.error('Failed to find users:', err);
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
        console.error('Failed to log in:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
  
module.exports = router;