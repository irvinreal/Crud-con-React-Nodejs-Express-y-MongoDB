import Card from '../UI/Card'
import NumberOfUsers from '../UI/NumberOfUsers'
import User from './User'
import classes from './UsersList.module.css'

function UsersList({ users, onDeleteUser, onEditUser, onSave }) {
  const deleteUserButtonHandler = (userId) => {
    onDeleteUser(userId)
  }

  const editUserButtonHandler = (userId) => {
    onEditUser(userId)
  }

  return (
    <Card className={classes.users}>
      <NumberOfUsers NumberOfUsers={users.length} />
      <h2 className={classes.title}>Users from Data Base</h2>

      <ul>
        {users.map((user) => {
          return (
            <User
              key={user._id}
              idKey={user._id}
              username={user.username}
              age={user.age}
              onDelete={deleteUserButtonHandler}
              onEdit={editUserButtonHandler}
              onSave={onSave}
            />
          )
        })}
      </ul>
    </Card>
  )
}

export default UsersList
