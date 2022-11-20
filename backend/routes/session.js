const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();
router.post('/', async (req, res, next) => {
   try {
       const body = req.body;
      
       const result = await UserController.authUser(body.email, body.pword);
       res.status(201).json(result);
   } catch (err) {
       console.error('Failed to authenticate user:', err);
       res.status(500).json({ message: err.toString() });
   }
   next();
})
module.exports = router;