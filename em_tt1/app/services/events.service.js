const db = require("../models");
const EventRecord = db.eventRecords;

const getAllEventsByUserId = async (userId, limit = 100, offset = 0) => {
  const events = await EventRecord.findAll({
    where: {
      userId,
    },
    limit,
    offset,
  });
  return events;
};

const createEvent = async (eventData) => {
  const createdEvent = await EventRecord.create(eventData);
  return createdEvent;
};

module.exports = {
  getAllEventsByUserId,
  createEvent,
};
