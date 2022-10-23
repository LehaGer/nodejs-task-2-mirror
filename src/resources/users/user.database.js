const User = require("./user.model");

const user1 = new User(
    {
      id: 1,
      name: "Alex",
      login: "Alex123",
      password: "password1"
    }
  )
  const user2 = new User(
    {
      id: 2,
      name: "Liza",
      login: "Liza123",
      password: "password2"
    }
  )
  const user3 = new User(
    {
      id: 3,
      name: "Leha",
      login: "Leha123",
      password: "password3"
    }
  )
  
  const Users = [
    user1,
    user2,
    user3
  ]

  module.exports = Users;
  