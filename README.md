# NodeJS

## All main requirements from task 2 was realized:
---
- GET /users   - get list of all users;
- GET /users/:userId  - get definit user by his id;
- POST /users - add new user to thr current users lists? adding json-format object;
- PUT /users/:userId - update user by putting user as json-object;
- DELETE /users/:userId - delete user by his id;
---
- GET /boards - get all boards;
- GET /boards/:boardId - get the board by id;
- POST /boards - create board;
- PUT /boards/:boardId - update board;
- DELETE /boards/:boardId - delete board;
---
- GET boards/:boardId/tasks - get all tasks;
- GET boards/:boardId/tasks/:taskId - get the task by id;
- POST boards/:boardId/tasks - create task;
- PUT boards/:boardId/tasks/:taskId - update task;
- DELETE boards/:boardId/tasks/:taskId - delete task;
---
- When somebody DELETEs Board, all its Tasks should be deleted as well;
- When somebody DELETEs User, all Tasks where User is assignee should be updated to put userId = null.
