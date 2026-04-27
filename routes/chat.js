const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const Session = require('../models/Session');

const router = express.Router();

function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

router.post('/ask', auth, async (req, res) => {
  try {
    const { sessionId, question } = req.body;

    if (!sessionId || !question) {
      return res.status(400).json({ message: 'sessionId and question required' });
    }

    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    const pyResponse = await axios.post(`${process.env.PYTHON_API}/answer`, {
      pdf_url: session.pdfUrl,
      question,
    });

    const answer = pyResponse.data.answer;
    session.messages.push({ role: 'user', content: question });
    session.messages.push({ role: 'bot', content: answer });
    await session.save();

    res.json({ answer, sessionId });
  } catch (err) {
    res.status(500).json({ message: `Could not get answer: ${err.message}` });
  }
});

router.get('/history/:sessionId', auth, async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json({ pdfName: session.pdfName, messages: session.messages });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
