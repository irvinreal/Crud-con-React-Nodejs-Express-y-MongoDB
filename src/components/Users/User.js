import { useState } from 'react'
import DeleteUserBtn from '../UI/DeleteUserBtn'
import EditUserBtn from '../UI/EditUserBtn'
import classes from './User.module.css'

function User({ idKey, username, age, onDelete, onEdit, onSave }) {
  const [inputUsername, setInputUsername] = useState(username)
  const [inputAge, setInputAge] = useState(age)
  const [editUser, setEditUser] = useState(false)

  const inputUsernameChangeHandler = (event) => {
    setInputUsername(event.target.value)
  }

  const inputAgeChangeHandler = (event) => {
    setInputAge(event.target.value)
  }

  return (
    <li className={classes.container}>
      <div className={classes.usernameContainer}>
        {editUser ? (
          <>
            <input
              className={classes.input}
              type='text'
              value={inputUsername}
              onChange={inputUsernameChangeHandler}
            />
          </>
        ) : (
          <span>{username}</span>
        )}
      </div>
      <div className={classes.ageContainer}>
        {editUser ? (
          <>
            <input
              className={classes.inputAge}
              type='text'
              value={inputAge}
              onChange={inputAgeChangeHandler}
            />
          </>
        ) : (
          <span>{age}</span>
        )}
      </div>
      <div className={classes.buttonContainer}>
        {editUser ? (
          <button
            className={`${editUser ? classes.editUser : null}`}
            onClick={() => {
              setEditUser(false)
              return onSave(idKey, { username: inputUsername, age: inputAge })
            }}
          >
            Save
          </button>
        ) : (
          <EditUserBtn userId={idKey} onEditUser={() => setEditUser(true)} />
        )}

        <DeleteUserBtn userId={idKey} onDeleteUser={onDelete} />
      </div>
    </li>
  )
}

export default User
