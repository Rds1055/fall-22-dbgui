const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', async (req, res, next) => {
    const allChannels = await req.models.channel.fetchAllChannels();
    res.json(allChannels);
    next();
});
router.get('/title/:title', async (req, res, next) => {
    const channelByName = await req.models.channel.fetchChannelsByName(req.params.title);
    res.json(channelByName);
    next();
});
router.get('/:channel_id', async (req, res, next) => {
    const channelById = await req.models.channel.fetchChannelsById(req.params.channel_id);
    res.json(channelById);
    next();
});
router.get('/movie/:movie_title', async (req, res, next) => {
    const channelByMovie = await req.models.channel.fetchChannelsByMovie(req.params.movie_title);
    res.json(channelByMovie);
    next();
});
router.post('/', async (req, res, next) => {
    const createChannel = await req.models.channel.createChannel(req.body.admin_id, req.body.title, req.body.movie_title);
    res.status(201).json(createChannel);
    next();
 });
 router.put('/', async (req, res, next) => {
    const updateChannel = await req.models.channel.updateChannelName(req.body.title, req.body.channel_id);
    res.json(updateChannel);
    next();
 });
 router.delete('/', async (req, res, next) => {
    const deleteChannel = await req.models.channel.deleteChannel(req.body.channel_id);
    res.status(204).end();
    next();
 });
module.exports = router;