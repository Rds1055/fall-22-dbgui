var express = require('express');
var router = express.Router();

// Get users listing
// create new channel
router.post('/', async(req, res, next) => {
    try {
        const body = req.body;
        console.log(body);
        const result = await req.models.channels.createChannel(body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Channel creation failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

// update channel info
router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        console.log(body);
        const result = await req.models.channels.updateChannel(id, body);
        res.status(200).json(result);
    } catch (err) {
        console.error('Update failure:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
}); 

// get all channels
router.get("/", async (req, res, next) => {
    try {
      const results = await req.models.channels.getAllChannels();
      res.status(200).json(results);
    } catch (err) {
      console.error("Channels not found:", err);
      res.status(500).json({message: err.message});
    }
    next();
});

// get by id
router.get("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const results = await req.models.channels.getById(id);
      res.status(200).json(results);
    } catch (err) {
      console.error("Channel not found:", err);
      res.status(500).json({message: err.message});
    }
    next();
});

// get by channelName
router.get("/:channelName", async (req, res, next) => {
    try {
      const channelName = req.params.id;
      const results = await req.models.channels.getByName(channelName);
      res.status(200).json(results);
    } catch (err) {
      console.error("Channel not found:", err);
      res.status(500).json({message: err.message});
    }
    next();
});

// get by movieTitle
router.get("/:movieTitle", async (req, res, next) => {
    try {
      const movieTitle = req.params.id;
      const results = await req.models.channels.getByMovie(movieTitle);
      res.status(200).json(results);
    } catch (err) {
      console.error("Channel not found:", err);
      res.status(500).json({message: err.message});
    }
    next();
});

// add post
router.post('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        console.log(body);
        const result = await req.models.posts.createNewPost(body);
        res.status(201).json(result);
    } catch (err) {
        console.error('Post creation failed:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});