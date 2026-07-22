import TaskList from './components/UI/TaskList'
import AddTask from './components/UI/AddTask'
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'

  
const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [tasks, setTasks] = useState([])
  const [tasksLoading, setTasksLoading] = useState(true)
  const [tasksError, setTasksError] = useState(null)

  const addTask = (newTask)=>{
    
    axios.post(`${API_URL}/tasks`,newTask)
      .then(response => setTasks([...tasks,response.data]))
  } 

  useEffect(() => {
          const getTasks = async() => { 
              try {
                  const response = await axios.get(`${API_URL}/tasks`)
                  setTasks(response.data) 
              }
              catch(error) {
                  console.error(error)
                  setTasksLoading(false)
                  setTasksError("Не удалось загрузить данные.")
              }
              finally {
                  setTasksLoading(false)
              }
          }
      getTasks()    
      }, [])

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <TaskList
          tasks={tasks}
          tasksLoading={tasksLoading}
          tasksError={tasksError}
        />
      </main>
      <aside className={styles.aside}>
        <AddTask onAdd={addTask}/>
      </aside>
    </div>
  )
}

export default App
