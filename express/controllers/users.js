const { UsersModel } = require('../../mongo/models')

const defaultUser = {
  name: 'Ted',
  age: '24'
}

const getAll = () => {
  return UsersModel.find({})
}

const getOne = (currentName) => {
  return UsersModel.findOne({name: currentName})
}

const createDefault = () => {
  return UsersModel.create(defaultUser)
}

const createUser = (user) => {
  return UsersModel.create(user)

}

const updateUser = (name, updates) => {
  return UsersModel.updateOne({name: name}, updates)
}

const deleteUser = (name) => {
  return UsersModel.deleteOne({name: name})
}

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
}