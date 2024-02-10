// import mongoosePagination from 'mongoose-pagination'
import User from '../models/user.model.js';

// console.log(mongoosePagination)

export const register = async (req, res) => {
  const { username, age } = req.body;
  console.log('username:', username, 'age:', age);

  try {
    const newUser = new User({
      username,
      age
    });

    await newUser.save();

    return res.status(200).send({
      status: 'success',
      message: 'Registrado!',
      newUser
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = (req, res) => {
  return res.status(200).send({
    status: 'success',
    message: 'Hola Usuario. Bienvenido!'
  });
};

export const listOfUsers = (req, res) => {
  // let page = 1

  // if (req.params.page) {
  //   page = req.params.page
  // }

  // page = parseInt(page)

  // let itemsPerPage = 10

  User.find()
    // .paginate(page, itemsPerPage)
    .then((users) => {
      return res.status(200).send({
        status: 'success',
        users
      });
    })
    .catch((error) => {
      return res.status(400).send({
        status: 'Error',
        error: error
      });
    });

  // -> es para probar la conexión mediante hoppscotch
  // return res.status(200).send({
  //   status: 'success',
  //   message: 'Aquí sí funciona!!!'
  // });
};

export const deleteUser = (req, res) => {
  const userToDelete = req.body;
  console.log(req);
  User.findById(userToDelete.id_userToDelete)
    .deleteOne()
    .then((user) => {
      console.log(user);
      return res.status(200).send({
        status: 'Deleted successfull.',
        userToDelete
      });
    });
};

export const editUser = (req, res) => {
  const userToEdit = req.body;

  console.log(userToEdit);

  // Encontrar el usuario que se va a editar ( buscar por su id )
  User.findByIdAndUpdate(userToEdit.id_userToEdit, userToEdit, {
    new: true
  }).then((user) => {
    return res.status(200).send({
      status: 'success.',
      message: 'User edited successfully!',
      user
    });
  });
};
