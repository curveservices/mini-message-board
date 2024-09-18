const pool = require('./pool');

const getAllMessages = async () => {
  try {
    const { rows: messages } = await pool.query('SELECT * FROM messages ORDER BY added DESC');
    return messages;
  } catch (error) {
    console.error('Error fetching messages', error);
    throw error;
  }
};

const addMessage = async (text, user) => {
  try {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [text, user]);
  } catch (error) {
    console.error('Error adding message', error);
    throw error;
  }
};

module.exports = {
  getAllMessages,
  addMessage
};
