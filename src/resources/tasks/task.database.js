const Task = require("./task.model");

const task1 = new Task(
    {
      id: 1,
      name: "Disability",
      title: 'DisabilityBlank',
      order: 1,
      description: 'Need to solve printing issue with DisabilityBalnk',
      userId: 2,
      boardId: 1,
      columnId: 1
    }
  )
  const task2 = new Task(
    {
      id: 2,
      name: "Recipe",
      title: 'RecipeBlank',
      order: 2,
      description: 'Need to solve printing issue with RecipeBalnk',
      userId: 3,
      boardId: 2,
      columnId: 2
    }
  )
  const task3 = new Task(
    {
      id: 3,
      name: "EKG",
      title: 'EKG Graph building',
      order: 1,
      description: 'Need to create EKG Graph building',
      userId: 2,
      boardId: 2,
      columnId: 1
    }
  )
  
  const Tasks = [
    task1,
    task2,
    task3
  ]

  module.exports = Tasks;
  