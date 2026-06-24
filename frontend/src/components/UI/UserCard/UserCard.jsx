import styles from './UserCard.module.css'

const UserCard = ({name,age,city}) => (
    <div className = {styles.UserCard}>
        <h1>Карточка пользователя</h1>
        <p>Имя пользователя: {name}</p>
        <p>Возраст: {age}</p>
        <p>Город: {city}</p>
    </div>


)
export default UserCard