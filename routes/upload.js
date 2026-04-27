const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
const Session = require('../models/Session');
require('dotenv').config();

const router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
      return;
    }

    cb(new Error('Only PDF files allowed!'), false);
  },
  limits: { fileSize: 10 * 1024 * 1024 },
});

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

router.post('/', auth, upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No PDF uploaded' });
    }

    const fileName = `${Date.now()}_${req.file.originalname}`;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileName,
      Body: req.file.buffer,
      ContentType: 'application/pdf',
    };

    const s3Result = await s3.upload(params).promise();
    const session = await Session.create({
      userId: req.user.id,
      pdfName: req.file.originalname,
      pdfUrl: s3Result.Location,
      messages: [],
    });

    res.status(201).json({
      message: 'PDF uploaded!',
      sessionId: session._id,
      pdfName: req.file.originalname,
      pdfUrl: s3Result.Location,
    });
  } catch (err) {
    res.status(500).json({ message: `Upload failed: ${err.message}` });
  }
});

router.get('/sessions', auth, async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .select('pdfName createdAt _id');

    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
