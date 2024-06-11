module.exports = (app) => {
  const events = require("../controllers/event.controller.js");

  var router = require("express").Router();

  // Get events for a user
  router.get("/", events.getAllEventsByUserId);

  app.use("/api/events", router);
};
