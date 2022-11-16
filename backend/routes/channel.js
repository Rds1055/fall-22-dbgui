const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', async (req, res, next) => {
    const allChannels = await req.models.channel.fetchAllChannels();
    res.json(allChannels);
    next();
});
router.get('/:title', async (req, res, next) => {
    const channelByName = await req.models.channel.fetchChannelsByName(req.query.title);
    res.json(channelByName);
    next();
});
router.post('/', async (req, res, next) => {
    const createChannel = await req.models.channel.createChannel(req.body.admin_id, req.body.title, 
        req.body.movie_title);
    res.status(201).json(createChannel);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateChannel = await req.models.channel.updateChannel(req.body.title, req.body.channel_id);
    res.json(updateChannel);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteChannel = await req.models.channel.deleteChannel(req.body.channel_id);
    res.status(204).end();
    next();
 });
module.exports = router;