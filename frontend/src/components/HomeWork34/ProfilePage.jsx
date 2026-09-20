import React from 'react'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  // В реальном проекте эти данные приходят из API или Redux
    const user = {
    id: 1,
    name: 'Алексей Смирнов',
    avatar: 'https://i.pravatar.io/avatar?u=alexey&s=200&r=pg&d=robohash',
    email: 'alexey@example.com',
    bio: 'Люблю React, Redux и писать чистый код. В свободное время катаюсь на велосипеде и читаю про алгоритмы.',
    location: 'Москва, Россия',
    joinedAt: '2021-03-15',
    stats: {
        posts: 42,
        followers: 187,
        following: 33,
    },
    }

    const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    }

    return (
    <div className={styles.profileContainer}>
        <header className={styles.profileHeader}>
        <img
            src={user.avatar}
            alt={`Аватар ${user.name}`}
            className={styles.avatar}
        />
        <div className={styles.infoBlock}>
            <h1 className={styles.userName}>{user.name}</h1>
            <p className={styles.userEmail}>{user.email}</p>
            {user.location && (
            <p className={styles.userLocation}>📍 {user.location}</p>
            )}
            <p className={styles.userJoined}>
                Участник с {formatDate(user.joinedAt)}
            </p>
        </div>
        </header>

        <section className={styles.bioSection}>
        <h2>О себе</h2>
        <p className={styles.bioText}>{user.bio}</p>
        </section>

        <section className={styles.statsSection}>
        <h2>Статистика</h2>
        <div className={styles.statsGrid}>
            <div className={styles.statCard}>
            <span className={styles.statValue}>{user.stats.posts}</span>
            <span className={styles.statLabel}>Постов</span>
            </div>
            <div className={styles.statCard}>
            <span className={styles.statValue}>{user.stats.followers}</span>
            <span className={styles.statLabel}>Подписчиков</span>
            </div>
            <div className={styles.statCard}>
            <span className={styles.statValue}>{user.stats.following}</span>
            <span className={styles.statLabel}>В подписках</span>
            </div>
        </div>
        </section>

      {/* Пример кнопки действия — можно заменить на Link или логику из твоих предыдущих компонентов */}
        <section className={styles.actionsSection}>
        <button className={styles.editButton}>Редактировать профиль</button>
        <button className={styles.followButton}>Подписаться</button>
        </section>
    </div>
    )
}

export default ProfilePage
