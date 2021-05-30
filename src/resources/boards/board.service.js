const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getBoardById =  (id) => boardRepo.getBoardById(id);

const createNewBoard = (body) => boardRepo.createNewBoard(body);

const updateBoard = (id, body) => boardRepo.updateBoard(id, body);

const deleteBoard = (id) => boardRepo.deleteBoard(id)

module.exports = { 
    getAll, 
    getBoardById, 
    createNewBoard, 
    updateBoard, 
    deleteBoard 
};
