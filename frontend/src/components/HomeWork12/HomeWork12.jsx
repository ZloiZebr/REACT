import { useDispatch, useSelector } from 'react-redux'
import styles from './HomeWork12.module.css'
import { Link } from 'react-router-dom'
import { postsSelectors, postsThunks } from '@store/slices/postsSlice'


const HomeWork12 = () => {
    const dispatch = useDispatch()
    const posts = useSelector(postsSelectors.selectPosts)
    const loadingStatus = useSelector(postsSelectors.selectLoadingStatus)
    const error = useSelector(postsSelectors.selectError)

    return (
            <div className={styles.cartContainer}>
                <h2>Список постов ДЗ №12</h2>
                    <button onClick={() => dispatch(postsThunks.fetchPosts())}
                        disabled={loadingStatus === true}
                        className={styles.loadButton}
                        >Загрузить посты
                    </button>
                <div className={styles.itemList}>
                    {loadingStatus && (
                        <div className={styles.statusMessage}>
                            <span className="spinner-border text-primary d-block mx-auto mb-3" role="status" style={{ width: '3rem', height: '3rem' }}></span>
                            Загрузка постов...
                        </div>
                    )}
                    {error && (
                        <div className={styles.addErrorMessage}>
                            Ошибка загрузки постов: {error}
                        </div>
                    )}
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className={styles.itemCard}>
                                <h3>Заголовок поста: {post.title}</h3>
                                <p>Содержание поста: {post.postBody}</p>
                                <span>Автор поста: {post.author}</span>
                            </div>
                            ))
                        ) : (
                            <div className={styles.emptyMessage}>Посты отсутствуют</div>
                        )
                    }
                    </div>
                <div className={styles.linksContainer}>
                    <Link to="/">← На главную</Link>
                </div>
            </div>
    )
}

export default HomeWork12
