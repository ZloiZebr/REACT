import styles from './UserCard.module.css'

const UserCard = ({name,age,city}) => (
    <div className = {styles.UserCard}>
        <h3 className = {styles.title}>Карточка пользователя</h3>
        <p>Имя пользователя: {name}</p>
        <p>Возраст: {age}</p>
        <p>Город: {city}</p>
    </div>


)
export default UserCard