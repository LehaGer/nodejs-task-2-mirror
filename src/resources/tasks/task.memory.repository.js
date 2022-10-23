const Task = require("./task.model");
const Tasks = require("./task.database");

const getAll = async () => Tasks;

const getTaskById = async (id) => Tasks.find((elem)=>elem.id === id)

const createNewTask = async (newUsrObj) => Tasks.push(new Task(newUsrObj))

const updateTask = async (id, body) => { 
  if(body) Tasks[Tasks.findIndex(elem=>elem.id===id)] = {...body} 
}

const deleteTask = async (id) => Tasks.splice(Tasks.findIndex(elem=>elem.id===id), 1);

module.exports = { 
  getAll,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask
};