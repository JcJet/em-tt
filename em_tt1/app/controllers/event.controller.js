const eventService = require("../services/events.service");

const getAllEventsByUserId = async (req, res, next) => {
  const userId = req.query.userId;
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;

  try {
    const events = await eventService.getAllEventsByUserId(userId, limit, skip);
    if (events) {
      res.status(200).json({
        status: "success",
        events: events,
      });
    } else {
      const e = new Error("Events not found");
      e.status = 404;
      return next(e);
    }
  } catch (error) {
    const e = new Error("Cannot get events");
    return next(e);
  }
};

module.exports = {
  getAllEventsByUserId,
};
