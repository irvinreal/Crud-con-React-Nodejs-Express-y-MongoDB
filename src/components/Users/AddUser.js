import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import CloseBtn from '../UI/CloseBtn'
import ErrorModal from '../UI/ErrorModal'
import OpenModalBtn from '../UI/OpenModalBtn'
import classes from './AddUser.module.css'

function AddUser(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    if (enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }

    props.onAddUser(enteredUsername, enteredAge)

    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div style={{ position: 'relative' }}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      {modalIsOpen ? (
        <Card className={classes.input}>
          <CloseBtn onModalIsOpen={setModalIsOpen} />
          <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input
              value={enteredUsername}
              id='username'
              type='text'
              placeholder='Nombre..'
              onChange={usernameChangeHandler}
            />
            <label htmlFor='age'>Age (years)</label>
            <input
              value={enteredAge}
              id='age'
              type='number'
              placeholder='30'
              onChange={ageChangeHandler}
            />
            <Button type='submit'>Add User</Button>
          </form>
        </Card>
      ) : (
        <OpenModalBtn onModalIsOpen={setModalIsOpen} />
      )}
    </div>
  )
}
export default AddUser
