import styles from './ContactsPage.module.css'
import { Link } from 'react-router-dom'

const ContactsPage = () => {
    return(
            <div className={styles.contactsPage}>
                <h1>Здесь все контакты</h1>
                <Link to="/home" className={styles.backLink}>← На Домашнюю страницу</Link>
            </div>
    )
}

export default ContactsPage