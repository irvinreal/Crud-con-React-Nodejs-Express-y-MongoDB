import React from 'react'
import classes from './OpenModalBtn.module.css'

function OpenModalBtn({ onModalIsOpen }) {
  const handleOpenModal = () => {
    onModalIsOpen(true)
  }
  return (
    <button onClick={handleOpenModal} className={classes.buttonContainer}>
      + Add user
    </button>
  )
}

export default OpenModalBtn
