import React from 'react'

const styles = {
  container: {
    position: 'absolute',
    top: '15px',
    left: '40px',
    fontWeight: '500',
    color: '#659DCA',
    // background: 'red',
    display: 'flex',
    gap: '2px',
    // flexDirection: 'column',
    alignItems: 'center'
  },
  span: {
    background: '#2758B421',
    minWidth: '20px',
    minHeight: '20px',
    // padding: '2px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function NumberOfUsers({ NumberOfUsers }) {
  return (
    <span style={styles.container}>
      <span style={styles.span}>{NumberOfUsers}</span>
      <span>Users</span>
    </span>
  )
}

export default NumberOfUsers
