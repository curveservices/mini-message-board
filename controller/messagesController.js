const db = require('../db/queries');

const getAllMessages = async (req, res) => {
  try {
    const  messages = await db.getAllMessages();
    res.render('index', { title: 'Mini Messageboard', messages });
  } catch (error) {
    console.error('Error fetching messages', error);
    res.status(500).send('Error fetching messages');
  }
};

const addMessage = async (req, res) => {
  const { messageText, messageUser } = req.body;
  try {
    await db.addMessage(messageText, messageUser);
    res.redirect('/')
  } catch (error) {
    console.error('Error adding message ', error);
    res.status(500).send('Error adding message')
  }
};

module.exports = {
  getAllMessages,
  addMessage,
}
