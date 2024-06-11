const userService = require("../services/user.service");
const eventService = require("../services/events.service");
const { validate } = require("./validators/user.validator");

// Create and Save a new User
const createUser = async (req, res, next) => {
  const userData = req.body;
  try {
    await validate(userData);
  } catch (error) {
    const e = new Error("Bad email or password");
    e.status = 400;
    return next(e);
  }

  try {
    const user = await userService.createUser(userData);
    if (user) {
      eventService.createEvent({
        userId: user.id,
        eventType: "Created",
        eventTime: new Date(),
      });
      res.status(200).json({
        status: "success",
      });
    }
  } catch (error) {
    console.log(error);
    if (error.parent.code == "23505") {
      const error = new Error("User already exists");
      error.status = 400;
      return next(error);
    } else {
      const e = new Error("Cannot create user");
      return next(e);
    }
  }
};

// Retrieve all Users from the database.
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    if (users) {
      res.status(200).json({
        status: "success",
        users: users,
      });
    } else {
      const e = new Error("User not found");
      e.status = 404;
      return next(e);
    }
  } catch (error) {
    const e = new Error("Cannot get all users");
    return next(e);
  }
};

// Update a User by the id in the request
const updateUserById = async (req, res, next) => {
  const userId = req.params.userId;
  const updateParams = req.body;
  try {
    await validate(updateParams);
  } catch (err) {
    const e = new Error("Bad email or password");
    e.status = 400;
    return next(e);
  }

  try {
    const affectedRows = await userService.updateUserById(userId, updateParams);
    if (affectedRows != 0) {
      eventService.createEvent({
        userId,
        eventType: "Updated",
        eventTime: new Date(),
      });
      res.status(200).json({
        status: "success",
        affectedRows: affectedRows,
      });
    } else {
      const e = new Error("User not found");
      e.status = 404;
      return next(e);
    }
  } catch (error) {
    const e = new Error("Cannot update user");
    return next(e);
  }
};

module.exports = {
  getAllUsers,
  updateUserById,
  createUser,
};
