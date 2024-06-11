module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.createUser);

  // Retrieve all User
  router.get("/", users.getAllUsers);

  // Update a User with id
  router.put("/:userId", users.updateUserById);

  app.use("/api/users", router);
};
