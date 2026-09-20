import { useState, useMemo } from 'react'
import styles from './HomeWork14.module.css'
import { Link } from 'react-router-dom'

const HomeWork14 = () => {

    const [tasks, setTasks] = useState([
    { id: 1, description: 'Поспать', completed: false },
    { id: 2, description: 'Поесть', completed: true },
    { id: 3, description: 'Пойти на улицу', completed: false },
    { id: 4, description: 'Работать', completed: true },
    ])
    const [searchText, setSearchText] = useState('')
    const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'
    const [extraCounter, setExtraCounter] = useState(0)

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const isMatch = task.description.toLowerCase().includes(searchText.toLowerCase())
            if (!isMatch) return false
            switch (filter) {
                case 'active':
                    return !task.completed
                case 'completed':
                    return task.completed
                default:
                    return true
            }
        })
    }, [tasks, searchText, filter])

    const stats = useMemo(() => {
        const tasksCounter = {
            all: 0,
            active: 0,
            completed: 0,
        }
        tasks.forEach(task => {task.completed ? tasksCounter.completed++ : tasksCounter.active++ })
        tasksCounter.all = tasksCounter.completed + tasksCounter.active
        return tasksCounter
    }, [tasks])

    const deleteTask = (id) => {
        setTasks(tasks.filter(task=> task.id !== id))
    }

    const toggleTask = (id) => {
        setTasks( tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed))
    }

    return (
    <>
        <div className={styles.counterContainer}>
            <h2>Список задач ДЗ №14 </h2>

            <div className={styles.statsBlock}>
                <span>Всего: {stats.all}</span>
                <span>Активные: {stats.active}</span>
                <span>Выполненные: {stats.completed}</span>
            </div>

            <div className={styles.filterGroup}>
                <button
                    onClick={() => setFilter('all')}
                    className={filter === 'all' ? styles.btnActive : styles.btnFilter}
                >
                    Все задачи
                </button>
                
                <button
                    onClick = {() => setFilter('active')}
                    className = {filter === 'active' ? styles.btnActive : styles.btnFilter}
                >
                    Активные задачи
                </button>

                <button
                    onClick = {() => setFilter('completed')}
                    className = {filter === 'completed' ? styles.btnActive : styles.btnFilter}
                >
                    Выполненные задачи
                </button>
            
            </div>
        </div>

        <div className={styles.tasksContainer}>
            <h2>Список задач (Todo)</h2>

        <form className={styles.taskInputForm}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Поиск задачи..."
                className={styles.searchInput}
            />
        </form>

        <div className={styles.tasksList}>
            {filteredTasks.length > 0 ? (
                filteredTasks.map(task => (
                    <div key={task.id} className={styles.task}>
                        <h3>Задача №{task.id}</h3>
                        <span>{task.description}</span>
                        <div className={styles.taskButtons}>
                            <button
                                onClick={() => deleteTask(task.id)}
                                className={styles.btnDelete}
                            >
                            Удалить
                            </button>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                    className={styles.checkboxInput}
                                />
                                <span className={styles.checkboxText}>
                                    {task.completed ? 'Выполнено' : 'Отметить как выполненую'}
                                </span>
                            </label>
                        </div>
                    </div>
                ))
                ) : (
                    <div className={styles.emptyMessage}>Нет задач по текущему фильтру</div>
                )}
        </div>

        <div className={styles.tasksButtonGroup}>
            <button
                onClick={clearCompletedTasks}
                className={styles.btnClearComplitedTasks}
            >
                Очистить выполненные
            </button>

            <button
                onClick={() => setExtraCounter(count => count + 1)}
                className={styles.btnExtra}
            >
                Нажато {extraCounter} раз
            </button>
        </div>

        <div className={styles.linksContainer}>
            <Link to="/">← На главную</Link>
        </div>
        </div>
    </>
    )
}

export default HomeWork14