import Card from "../UI/Card";
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={ styles['users-card']}>
      <ul className={styles['users-list']}>
        {props.users.map(user => {
          return (
            <li key={ user.id } className={styles['user-list__item']}>
              {`${ user.name } (${user.age} years old)`}
            </li>
          )
        })}
      </ul>
    </Card>
  );
}

export default UsersList;