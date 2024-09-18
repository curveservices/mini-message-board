const db = require('../db/queries');

const getAllMessages = async (req, res) => {
  try {
    const messages = await db.getAllMessages();
    res.render('index', { title: 'Mini Messageboard', messages });
  } catch (error) {
    console.error('Error fetching messages', error);
  }
};

const addMessage = async (req, res) => {
  const { messageText, messageUser } = req.body;
  try {
    await db.addMessage(messageText, messageUser);
    res.redirect('/');
  } catch (error) {
    console.error('Error adding message', error);
  }
};

module.exports = {
  getAllMessages,
  addMessage
};

