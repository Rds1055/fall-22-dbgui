const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
const auth = require("../middleware/auth");
router.post('/', async (req, res, next) => {
   try {
       const body = req.body;
      
       const result = await UserController.authUser(body.username, body.password);
       if (result === null) {
        res.status(401).json({message: "Invalid credentials"});
       } else {
        res.status(201).json(result);
       }
   } catch (err) {
       console.error('Failed to authenticate user:', err);
       res.status(500).json({ message: err.toString() });
   }
   next();
})

router.get('/', auth.authenticateJWT, async(req, res, next) => {
    try {
        const username = req.user.username;
        const result = await req.models.user.findUserByUsername(username);
        res.status(200).json(result);
    } catch (err) {
        console.error("Failed to get session:", err);
        res.status(500).json({message: err.toString()});
    }
    next();
})
module.exports = router;