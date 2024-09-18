const express = require('express');
const router = express.Router();
const messageController = require('../controller/messagesController');

// GET home page.
router.get('/', messageController.getAllMessages); 

// GET new message form.
router.get('/new', (req, res) => {
  res.render('form', {title: "New Message"});
});

// POST new message.
router.post('/new', messageController.addMessage); 

module.exports = router;
