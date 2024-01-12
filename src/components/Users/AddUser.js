import { useRef, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import CloseBtn from '../UI/CloseBtn'
import ErrorModal from '../UI/ErrorModal'
import OpenModalBtn from '../UI/OpenModalBtn'
import './AddUser.css'
import classes from './AddUser.module.css'

function AddUser(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const input_username = useRef(null)

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
    input_username.current.focus()
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

      <div className={`cardForm ${modalIsOpen ? 'on' : 'off'}`}>
        <Card className={`${classes.cardForm}`}>
          <CloseBtn onModalIsOpen={setModalIsOpen} />
          <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input
              ref={input_username}
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
            <Button type='submit'>+ Add User</Button>
          </form>
        </Card>
      </div>

      <div className={`openModalBtn  ${modalIsOpen ? 'off' : 'on'}`}>
        <OpenModalBtn onModalIsOpen={setModalIsOpen} />
      </div>
    </div>
  )
}
export default AddUser
