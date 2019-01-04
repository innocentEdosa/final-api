const { validationResult } = require('express-validator/check');

const Meetup = require('../model/meetup');

const util = require('./util/util');

// this controller handles the creation of new meetups
exports.createMeetup = (req, res) => {
  const {
    location, images, topic, happeningOn, tags, description, createdBy,
  } = req.body;
    // created an error variable to hold error collected by express-validate body in the route
  const error = validationResult(req);
  // if the error variable is not empty reply user with the appropriate error message
  util.checkError(error, res);
  // create new meetup from the meetup model
  const meetup = new Meetup();
  meetup.create(location, images, topic, happeningOn, tags, description, createdBy);
  return res.status(201).json({ status: 201, data: meetup });
};

// this controller returns list of all meetup
exports.getMeetups = (req, res) => {
  const meetup = Meetup.getAll();
  if (meetup.length === 0) {
    return res.status(204).json({ status: 204, data: [{ info: 'No meetup yet' }] });
  }
  return res.status(200).json({ status: 200, data: meetup });
};
