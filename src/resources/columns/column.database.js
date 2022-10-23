const Column = require("./column.model");

const column1 = new Column(
    {
      id: 1,
      title: "Open",
      order: 1
    }
  )
  const column2 = new Column(
    {
      id: 2,
      title: "toFix",
      order: 2
    }
  )
  const column3 = new Column(
    {
      id: 3,
      title: "toDo",
      order: 3
    }
  )
  
  const Columns = [
    column1,
    column2,
    column3
  ]

  module.exports = Columns;
  