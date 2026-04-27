const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ['user', 'bot'] },
  content: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pdfName: { type: String, required: true },
    pdfUrl: { type: String, required: true },
    messages: [messageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema);
