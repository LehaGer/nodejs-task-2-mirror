const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const board = await boardsService.getBoardById(id);
  res.json(board);
});

router.route('/').post(async (req, res) => {
  if(boardsService.createNewBoard(req.body)) res.json("new board sucsesfully added");
  else res.json("error: new board haven't been created");
});

router.route('/:id').put(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const boardUpdatingResult = await boardsService.updateBoard(id, req.body);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  boardUpdatingResult
    ? textMsg = "updating was sucsessful"
    : textMsg = "updating was unsucsessful";
  res.json(textMsg);
});

router.route('/:id').delete(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedBoard = await boardsService.deleteBoard(id);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  (deletedBoard.id === id)
    ? textMsg = "deleting was sucsessful"
    : textMsg = "deleting was unsucsessful"; 
  res.json(textMsg);
});

module.exports = router;
