const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = await tasksService.getTaskById(id);
  res.json(task);
});

router.route('/').post(async (req, res) => {
  if(tasksService.createNewTask(req.body)) res.json("new task sucsesfully added");
  else res.json("error: new task haven't been created");
});

router.route('/:id').put(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const taskUpdatingResult = await tasksService.updateTask(id, req.body);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  taskUpdatingResult
    ? textMsg = "updating was sucsessful"
    : textMsg = "updating was unsucsessful";
  res.json(textMsg);
});

router.route('/:id').delete(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedTask = await tasksService.deleteTask(id);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  (deletedTask.id === id)
    ? textMsg = "deleting was sucsessful"
    : textMsg = "deleting was unsucsessful"; 
  res.json(textMsg);
});

module.exports = router;
