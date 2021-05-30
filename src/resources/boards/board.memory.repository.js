const Board = require('./board.model');
const Boards = require('./board.database');
const Tasks = require('../tasks/task.database');
const { deleteTask } = require('../tasks/task.memory.repository');

const getAll = async () => Boards;

const getBoardById = async (id) => Boards.find((elem) => elem.id === id);

const createNewBoard = async (newBoardObj) =>
  Boards.push(new Board(newBoardObj));

const updateBoard = async (id, body) => {
  if (body) Boards[Boards.findIndex((elem) => elem.id === id)] = { ...body };
  return true;
};

const deleteBoard = async (id) => {

  // deleting all boards tasks
  Tasks.forEach(task => { if(task.boardId === id) deleteTask(task.id) });

  // deleting board
  Boards.splice(
    Boards.findIndex((elem) => elem.id === id),
    1
  );

  return true;
};

module.exports = {
  getAll,
  getBoardById,
  createNewBoard,
  updateBoard,
  deleteBoard,
};
