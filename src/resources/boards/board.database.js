const Board = require("./board.model");

const board1 = new Board(
    {
      id: 1,
      title: "Board1",
      columns: [1,2,3,4]
    }
  )
  const board2 = new Board(
    {
      id: 2,
      title: "Board2",
      columns: [5,6]
    }
  )
  const board3 = new Board(
    {
      id: 3,
      title: "Board3",
      columns: [7,8,9]
    }
  )
  
  const Boards = [
    board1,
    board2,
    board3
  ]

  module.exports = Boards;
  