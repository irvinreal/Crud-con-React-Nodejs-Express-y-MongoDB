import { useEffect, useState } from 'react'
import Navbar from '../components/UI/Navbar'
import AddUser from '../components/Users/AddUser'
import UsersList from '../components/Users/UsersList'
import classes from './PageUsers.module.css'

const URL_USERS_LIST = 'http://localhost:4559/api/users'
const URL_REGISTER = 'http://localhost:4559/api/register'

function Users() {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    fetch(URL_USERS_LIST, { method: 'GET' })
      .then((res) => {
        return res.json()
      })
      .then((users) => {
        console.log(users)
        return setUsersList(users.users)
      })
      .catch((error) => {
        console.log('Error: ', error)
      })

    // console.log('usersList', usersList)
    // console.log('usersListJson', usersListJson)
  }, [])

  const addUserHandler = (uName, uAge) => {
    // setUsersList((prevUsersList) => {
    //   return [...prevUsersList, { username: uName, age: uAge }]
    // })

    const data = { username: uName, age: uAge }

    // Mandar a la base de datos ->
    fetch(URL_REGISTER, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .catch((error) => console.log('Errors: ', error))
      .then((response) => {
        console.log('Success!: ', response)
        setUsersList((prevUsersList) => {
          return [
            ...prevUsersList,
            {
              username: response.newUser.username,
              age: response.newUser.age,
              id: response.newUser._id
            }
          ]
        })
      })
  }

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
          <UsersList users={usersList} />
        )}
      </div>
    </section>
  )
}

export default Users
