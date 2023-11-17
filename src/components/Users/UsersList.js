import Card from '../UI/Card'
import classes from './UsersList.module.css'

function UsersList({ users }) {
  console.log(users)
  return (
    <Card className={classes.users}>
      <h2 className={classes.title}>Users from Data Base</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} className={classes.user}>
            <span>{user.username}</span> <span>{user.age} years old</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
