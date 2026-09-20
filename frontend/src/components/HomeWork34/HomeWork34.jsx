import { useState, useEffect } from 'react'
import styles from './HomeWork34.module.css'
import { Link, useLocation } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'

localStorage.setItem('isAuthenticated', false)
const HomeWork34 = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const location = useLocation()
    useEffect(() => {
        const savedAuth = localStorage.getItem('isAuthenticated')
        setIsAuthenticated(savedAuth === 'true')
    }, [])

    const toggleAuth = () => {
        const newStatus = !isAuthenticated
        setIsAuthenticated(newStatus)
        localStorage.setItem('isAuthenticated', String(newStatus))
    }

    // const setAuthenticated = ()=> setIsAuthenticated(!isAuthenticated)
    const redirectError = location.state?.error

    return (
    <div className={styles.container34}>
        {redirectError && (
        <div className={styles.errorMessage}>
            {redirectError}
        </div>
        )}

        {!isAuthenticated ? (
        <>
            <h1 className={styles.mainTitle}>Главная страница</h1>
            <div className={styles.linksContainer34}>
            <button onClick={toggleAuth} className={styles.loginButton}>
                Войти
            </button>
            <Link to="/" className={styles.backLink}>← На главную</Link>
            </div>
        </>
        ) : (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <h1 className={styles.mainTitle}>Главная страница</h1>
            <div className={styles.linksContainer34}>
            <button onClick={toggleAuth} className={styles.loginButton}>
                Выйти
            </button>
            <Link to="/" className={styles.backLink}>← На главную</Link>
            </div>
            <h3 style={{ textAlign: 'center' }}>Вы авторизованы ✅</h3>
        </ProtectedRoute>
        )}
    </div>
    )
}

export default HomeWork34