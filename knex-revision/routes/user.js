const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/current', async (req, res, next) => {
   if (req.query.name) {
       const userByName = await req.models.user.fetchUsersByName(req.query.name);
       res.json(userByName);
       next();
   } else {
       const allUsers = await req.models.user.fetchAllUsers();
       res.json(allUsers);
       next();
   }
});
router.post('/', async (req, res, next) => {
    const createUser = await req.models.user.createUser(req.body.username, req.body.email, 
        req.body.pword, req.body.is_admin, req.body.user_since);
    res.status(201).json(createUser);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateUser = await req.models.user.updateUser(req.body.username, req.body.user_id);
    res.json(updateUser);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteUser = await req.models.user.deleteUser(req.body.user_id);
    res.status(204).end();
    next();
 });
module.exports = router;