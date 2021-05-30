const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserById =  (id) => usersRepo.getUserById(id);

const createNewUser = (body) => usersRepo.createNewUser(body);

const updateUser = (id, body) => usersRepo.updateUser(id, body);

const deleteUser = (id) => usersRepo.deleteUser(id)

module.exports = { 
    getAll, 
    getUserById, 
    createNewUser, 
    updateUser, 
    deleteUser 
};
