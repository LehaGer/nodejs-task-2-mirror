const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();

const getColumnById =  (id) => columnsRepo.getColumnById(id);

const createNewColumn = (body) => columnsRepo.createNewColumn(body);

const updateColumn = (id, body) => columnsRepo.updateColumn(id, body);

const deleteColumn = (id) => columnsRepo.deleteColumn(id)

module.exports = { 
    getAll, 
    getColumnById, 
    createNewColumn, 
    updateColumn, 
    deleteColumn 
};
