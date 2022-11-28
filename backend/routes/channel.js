const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.get('/', async (req, res, next) => {
    try {
        const allChannels = await req.models.channel.fetchAllChannels();
        res.status(200).json(allChannels);
    } catch (err) {
        console.error("Failed to get channels:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/title/:title', async (req, res, next) => {
    try {
        const channelByName = await req.models.channel.fetchChannelsByName(req.params.title);
        res.status(200).json(channelByName);
    } catch (err) {
        console.error("Failed to get channels:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/:channel_id', async (req, res, next) => {
    try {
        const channelById = await req.models.channel.fetchChannelsById(req.params.channel_id);
        res.status(200).json(channelById);
    } catch (err) {
        console.error("Failed to get channels:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.get('/movie/:movie_title', async (req, res, next) => {
    try {
        const channelByMovie = await req.models.channel.fetchChannelsByMovie(req.params.movie_title);
        res.json(channelByMovie);
    } catch (err) {
        console.error("Failed to get channels:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});
router.post('/', async (req, res, next) => {
    try {
        const createChannel = await req.models.channel.createChannel(req.body.admin_id, req.body.title, req.body.movie_title);
        res.status(201).json(createChannel);
    } catch (err) {
        console.error("Failed to create channel:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.put('/', async (req, res, next) => {
    try {
        const updateChannel = await req.models.channel.updateChannelName(req.body.title, req.body.channel_id);
        res.status(200).json(updateChannel);
    } catch (err) {
        console.error("Failed to update channel:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
 router.delete('/', async (req, res, next) => {
    try {
        const deleteChannel = await req.models.channel.deleteChannel(req.body.channel_id);
        res.status(204).end();
    } catch (err) {
        console.error("Failed to get channels:", err);
        res.status(500).json({ message: err.toString() });
    }
    next();
 });
module.exports = router;