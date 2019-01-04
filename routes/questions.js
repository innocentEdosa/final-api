const express = require('express');

const router = express.Router();

const { body } = require('express-validator/check'); // require check express validator

const questionController = require('../controller/questions'); // require the question controller

router.post('/', // this route handles requests for creating a new question
//  add simple validation for the incoming request
  [body('createdBy').custom((value) => {
    if (value === undefined || '') { throw new Error('createdBy cannot be undefined'); }
    return true;
  }),
  body('meetup').custom((value) => {
    if (value === undefined || '') { throw new Error('meetup cannot be undefined'); }
    return true;
  }),
  body('title').custom((value) => {
    if (value === undefined || '') { throw new Error('title cannot be undefined'); }
    return true;
  }),
  body('body').custom((value) => {
    if (value === undefined || '') { throw new Error('body cannot be undefined'); }
    return true;
  }),
  ],
  questionController.createQuestion);

router.patch('/:questionId/upvote', questionController.vote('upvote'));
router.patch('/:questionId/downvote', questionController.vote('downvote'));

module.exports = router;
