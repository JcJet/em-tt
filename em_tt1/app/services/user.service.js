const db = require("../models");
const User = db.users;

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const updateUserById = async (userId, updateParams) => {
  const updated = await User.update(
    {
      ...updateParams,
    },
    {
      where: {
        id: userId,
      },
    }
  ).then((count) => {
    return count;
  });
  return updated;
};

const createUser = async (userData) => {
  const createdUser = await User.create(userData);
  return createdUser;
};

module.exports = {
  getAllUsers,
  updateUserById,
  createUser,
};
