import mongoosePagination from 'mongoose-pagination'
import User from '../models/user.model.js'

console.log(mongoosePagination)

export const register = async (req, res) => {
  const { username, age } = req.body

  try {
    const newUser = new User({
      username,
      age
    })

    await newUser.save()

    return res.status(200).send({
      status: 'Success!',
      message: 'Registrado!',
      newUser
    })
  } catch (err) {
    console.log(err)
  }
}

export const login = (req, res) => {
  return res.status(200).send({
    status: 'Success!',
    message: 'Hola Usuario. Bienvenido!'
  })
}

export const listOfUsers = (req, res) => {
  let page = 1

  if (req.params.page) {
    page = req.params.page
  }

  page = parseInt(page)

  let itemsPerPage = 10

  User.find()
    .paginate(page, itemsPerPage)
    .then((users) => {
      return res.status(200).send({
        status: 'Success!',
        users
      })
    })
}
