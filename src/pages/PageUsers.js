import { useEffect, useState } from 'react';
import Navbar from '../components/UI/Navbar';
import AddUser from '../components/Users/AddUser';
import UsersList from '../components/Users/UsersList';
import classes from './PageUsers.module.css';

const URL_USERS_LIST = 'http://localhost:4559/api/users'; // method: 'GET'
const URL_REGISTER = 'http://localhost:4559/api/register';
const URL_DELETE_USER = 'http://localhost:4559/api/delete-user';
const URL_UPDATE_USER = 'http://localhost:4559/api/update-user';

function Users() {
  const [usersList, setUsersList] = useState([]);
  // const [editUser, setEditUser] = useState(false)

  // Cargar los usuarios desde la base de datos al renderizar el componente
  useEffect(() => {
    fetch(URL_USERS_LIST, { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(users);
        if (users) return setUsersList(users.users);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    // console.log('usersList', usersList)
    // console.log('usersListJson', usersListJson)
  }, []);

  const addUserHandler = (uName, uAge) => {
    const data = { username: uName, age: uAge };

    // Mandar a la base de datos cuando se enviar la información del formulario ->
    fetch(URL_REGISTER, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('Success!: ', response);
        setUsersList((prevUsersList) => {
          return [
            ...prevUsersList,
            {
              username: response.newUser.username,
              age: response.newUser.age,
              id: response.newUser._id
            }
          ];
        });
      })
      .catch((error) => console.log('Errors: ', error));
  };

  const deleteUserHandler = (userId) => {
    const userToDelete = {
      id_userToDelete: userId
    };
    console.log('delete..', userToDelete);
    fetch(URL_DELETE_USER, {
      method: 'DELETE',
      body: JSON.stringify(userToDelete),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .catch((error) => console.log('Errors: ', error))
      .then((response) => {
        console.log('Success!: ', response);
        setUsersList((prevUsersList) => {
          return prevUsersList.filter(
            (user) => user._id !== response.userToDelete.id_userToDelete
          );
        });
      });
  };

  // const editUserHandler = () => {
  //   setEditUser(true)
  // }

  const saveUserHandler = (userId, data) => {
    const userToUpdate = {
      id_userToEdit: userId,
      ...data
    };
    // console.log(userToUpdate)

    fetch(URL_UPDATE_USER, {
      method: 'PUT',
      body: JSON.stringify(userToUpdate),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((userUpdated) => {
        // console.log(userUpdated)
        return setUsersList((prevUsersList) => {
          return [
            userUpdated.user,
            ...prevUsersList.filter((user) => user._id !== userUpdated.user._id)
          ];
        });
      });
  };

  return (
    <section className={classes.container}>
      <Navbar />
      <div className={classes['add-user-section']}>
        <AddUser onAddUser={addUserHandler} />
      </div>

      <div className={classes['users-list-section']}>
        {usersList.length < 1 ? (
          <p style={{ color: '#FFFFFF46', marginTop: 150 }}>No hay usuarios.</p>
        ) : (
          <UsersList
            users={usersList}
            onDeleteUser={deleteUserHandler}
            onSave={saveUserHandler}
          />
        )}
      </div>
    </section>
  );
}

export default Users;
