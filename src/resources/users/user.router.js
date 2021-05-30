const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));   // map user fields to exclude secret fields like "password"
});

router.route('/:id').get(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = await usersService.getUserById(id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  if(usersService.createNewUser(req.body)) res.json("new user sucsesfully added");
  else res.json("error: new user haven't been created");
});

router.route('/:id').put(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userUpdatingResult = await usersService.updateUser(id, req.body);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  userUpdatingResult
    ? textMsg = "updating was sucsessful"
    : textMsg = "updating was unsucsessful";
  res.json(textMsg);
});

router.route('/:id').delete(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedUser = await usersService.deleteUser(id);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  (deletedUser.id === id)
    ? textMsg = "deleting was sucsessful"
    : textMsg = "deleting was unsucsessful"; 
  res.json(textMsg);
});

module.exports = router;
