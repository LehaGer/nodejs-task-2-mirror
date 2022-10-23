const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getTaskById =  (id) => tasksRepo.getTaskById(id);

const createNewTask = (body) => tasksRepo.createNewTask(body);

const updateTask = (id, body) => tasksRepo.updateTask(id, body);

const deleteTask = (id) => tasksRepo.deleteTask(id)

module.exports = { 
    getAll, 
    getTaskById, 
    createNewTask, 
    updateTask, 
    deleteTask 
};
