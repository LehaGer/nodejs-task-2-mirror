const User = require('./user.model');
const Users = require('./user.database');
const Tasks = require('../tasks/task.database');

const getAll = async () => Users;

const getUserById = async (id) => Users.find((elem) => elem.id === id);

const createNewUser = async (newUsrObj) => Users.push(new User(newUsrObj));

const updateUser = async (id, body) => {
  if (body) Users[Users.findIndex((elem) => elem.id === id)] = { ...body };
};

const deleteUser = async (id) => {
  Tasks.forEach((task) => {
    const curTasks = task;
    if (task.userId === id) curTasks.userId = null;
  });

  Users.splice(
    Users.findIndex((elem) => elem.id === id),
    1
  );

  return true;
};

module.exports = {
  getAll,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
