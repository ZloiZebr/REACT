import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return(
        <div className={styles.homePage}>
            <h1>Добро пожаловать!</h1>
            <p>С этой страницы можно попасть на другие интересные страницы</p>
            <div className={styles.linksContainer}>
                <Link to="/about">← О данной работе</Link>
                <Link to="/contacts">← Список контактов</Link>
                <Link to="/">← На главную</Link>
            </div>
        </div>
    )
}

export default HomePage