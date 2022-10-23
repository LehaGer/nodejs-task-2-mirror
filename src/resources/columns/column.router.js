const router = require('express').Router();
const columnsService = require('./column.service');

router.route('/').get(async (req, res) => {
  const columns = await columnsService.getAll();
  res.json(columns);
});

router.route('/:id').get(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const column = await columnsService.getColumnById(id);
  res.json(column);
});

router.route('/').post(async (req, res) => {
  if(columnsService.createNewColumn(req.body)) res.json("new column sucsesfully added");
  else res.json("error: new column haven't been created");
});

router.route('/:id').put(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const columnUpdatingResult = await columnsService.updateColumn(id, req.body);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  columnUpdatingResult
    ? textMsg = "updating was sucsessful"
    : textMsg = "updating was unsucsessful";
  res.json(textMsg);
});

router.route('/:id').delete(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedColumn = await columnsService.deleteColumn(id);
  let textMsg = null;
  // eslint-disable-next-line no-unused-expressions
  (deletedColumn.id === id)
    ? textMsg = "deleting was sucsessful"
    : textMsg = "deleting was unsucsessful"; 
  res.json(textMsg);
});

module.exports = router;
