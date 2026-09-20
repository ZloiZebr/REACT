import { useState } from 'react'
import styles from './SettingsPage.module.css'

const SettingsPage = () => {
    const [theme, setTheme] = useState('light')
    const [notifications, setNotifications] = useState(true)
    const [language, setLanguage] = useState('ru')

    return (
    <div className={styles.settingsContainer}>
        <h1>Настройки</h1>

        <section className={styles.settingGroup}>
        <h3>Тема оформления</h3>
        <label>
            <input
            type="radio"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
            />
            Светлая
        </label>
        <label>
            <input
            type="radio"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
            />
            Тёмная
            </label>
        </section>

        <section className={styles.settingGroup}>
        <h3>Уведомления</h3>
        <label>
            <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            />
            Получать уведомления
        </label>
        </section>

        <section className={styles.settingGroup}>
        <h3>Язык интерфейса</h3>
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
        >
            <option value="ru">Русский</option>
            <option value="en">English</option>
        </select>
        </section>

        <section className={styles.settingGroup}>
        <h3>Профиль (заглушка)</h3>
        <p>Имя: Иван Иванов</p>
        <p>Email: ivan@example.com</p>
        <button className={styles.btn}>Редактировать профиль</button>
        </section>

        <button className={`${styles.btn} ${styles.btnPrimary}`}>Сохранить настройки</button>
    </div>
    )
}

export default SettingsPage