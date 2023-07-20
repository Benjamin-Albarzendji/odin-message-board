const express = require('express');

const router = express.Router();

const chatController = require('../controllers/chatController');

/* GET home page. */
router.get('/', chatController.index);
router.post('/new', chatController.new);

module.exports = router;
