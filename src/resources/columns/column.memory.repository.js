const Column = require("./column.model");
const Columns = require("./column.database");

const getAll = async () => Columns;

const getColumnById = async (id) => Columns.find((elem)=>elem.id === id)

const createNewColumn = async (newUsrObj) => Columns.push(new Column(newUsrObj))

const updateColumn = async (id, body) => { 
  if(body) Columns[Columns.findIndex(elem=>elem.id===id)] = {...body} 
}

const deleteColumn = async (id) => Columns.splice(Columns.findIndex(elem=>elem.id===id), 1);

module.exports = { 
  getAll,
  getColumnById,
  createNewColumn,
  updateColumn,
  deleteColumn
};