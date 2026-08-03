import { useDispatch, useSelector } from 'react-redux'
import styles from './HomeWork9.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const HomeWork9 = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.countStorage.count)
    const tasks = useSelector(state => state.tasksStorage.tasks)
    const [taskDescription, setTaskDescription] = useState('')

    const increaseCount = () => {
        dispatch({ type: "INCREMENT", payload: 1 })
    }

    const decreaseCount = () => {
        dispatch({ type: "DECREMENT", payload: 1 })
    }
    
    const resetCount = () => {
        dispatch({ type: "RESET", payload: 0 })
    }

    const addTask = (taskDescription) => {
        const newTask = { id: tasks.length + 1, description: taskDescription, completed: false }
        dispatch({ type: "ADD_TASK", payload: newTask })
        setTaskDescription('')
    }

    const deleteTask = (taskId) => {
        dispatch({ type: "DELETE_TASK", payload: taskId })
    }

    const toggleTask = (taskId) => {
        dispatch({ type: "TOGGLE_TASK", payload: taskId })
    }

    const clearCompletedTasks = () => {
        dispatch({ type: "CLEAR_COMPLETED"})
    }

    return (
        <>
            <div className={styles.counterContainer}>
                <h2>Список за ДЗ №9</h2>
                <span className={styles.countValue}>Счёт: {count}</span>
                <div className={styles.buttonGroup}>
                    <button onClick={() => increaseCount()} className={styles.btnIncrease}>+1</button>
                    <button onClick={() => decreaseCount()} className={styles.btnDecrease}>-1</button>
                    <button onClick={() => resetCount()} className={styles.btnReset}>Сброс</button>
                </div>
            </div>
            <div className={styles.tasksContainer}>
                <h2>Список задач (Todo) на Redux для ДЗ №9</h2>
                <span className={styles.allTasksValue}>Всего задач: {tasks.length}</span>
                <span className={styles.notComplitedTasksValue}>Невыполненых задач: {tasks.filter(task => !task.completed).length}</span>
                <div className={styles.tasksList}>
                    {tasks.map(task => (
                        <div key={task.id} className={styles.task}>
                            <h3>Задача №{task.id}</h3>
                            <span>Описание задачи: {task.description}</span>
                            <div className={styles.taskButtons}>
                                <button onClick={() => deleteTask(task.id)} className={styles.btnDelete}>
                                    Удалить
                                </button>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                        className={styles.checkboxInput}
                                    />
                                    <span className={styles.checkboxText}>Отметить как выполненую</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.tasksButtonGroup}>
                    <form className = {styles.taskInputForm}>
                        <input 
                            type="text"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            placeholder='Введите описание задачи'
                        />
                        <button type="button"
                            onClick={()=> addTask(taskDescription)}
                        > Добавить задачу</button>
                    </form>
                    <button onClick={() => clearCompletedTasks()} className={styles.btnClearComplitedTasks}>Очистить выполненные</button>
                </div>
                <div className={styles.linksContainer}>
                <Link to="/">← На главную</Link>
                </div>
            </div>
        </>

    )
}

export default HomeWork9