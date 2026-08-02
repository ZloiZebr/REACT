import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <>
            <h1 className={styles.notFoundPage}>Страница не найдена</h1>
            <Link to="/home" className={styles.backLink}>← На Домашнюю страницу</Link>
        </>
    )
}

export default NotFoundPage