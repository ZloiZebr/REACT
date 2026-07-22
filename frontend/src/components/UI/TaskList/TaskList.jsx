import styles from './TaskList.module.css'

const TaskList = ({tasks,tasksLoading,tasksError}) => {
    return(
        <>
            <h1>Домашнее задание по React №5</h1>
            <h2>Список задач</h2>
            <ul>{
                tasksLoading ? (
                <div className="d-flex align-items-center">
                    <strong role="status">Загрузка  задач...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>
                ) : tasksError ? (
                    <div>{tasksError}</div>
                ) : (
                    tasks.map(task => (
                    <li key={task.id}>
                        <div className={styles.taskCard}>
                            <h3>Задача - {task.title}</h3>
                            <p>Описание задачи: {task.description}</p>
                            <p>Приоритет задачи: {task.priority}</p>
                        </div>
                    </li>
                    ))
                )
            }
            </ul>
        </>
    )
}

export default TaskList