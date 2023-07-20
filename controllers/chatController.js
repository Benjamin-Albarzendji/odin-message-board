const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const Chat = require('../models/chat');

exports.index = asyncHandler(async (req, res, next) => {
  const allChats = await Chat.find({}).exec();

  res.render('index', { title: 'Odin Mini-Message Board', chats: allChats });
});

exports.new = [
  // Validate and sanitize fields
  body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('message', 'Message must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    

    // Create a Book object with escaped and trimmed data.
    const chat = new Chat({
      name: req.body.name,
      message: req.body.message,
    });

    await chat.save();
    res.redirect('/');
  }),
];
