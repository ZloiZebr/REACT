import styles from './AddTask.module.css'
import { useState, useRef } from 'react'


const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")

    const formRef = useRef(null)

    return(
        <form ref = {formRef} className = {styles.form}>
            <input 
                type="text"
                placeholder='Название задачи'
                onChange={event => setTitle(event.target.value)}
            />

            <textarea 
                placeholder='Содержание задачи'
                onChange={event => setDescription(event.target.value)}
            ></textarea>
            
            <span>Выберите приоритет задачи:    </span>
            <select 
                name="priority" 
                onChange={event => setPriority(event.target.value)}
            >       
                    <option value="">-- Выберите --</option>
                    <option value="Обычная">Обычная</option>
                    <option value="Важная">Важная</option>
                    <option value="Очень важная">Очень важная</option>
            </select>

            <button type="button"
                onClick={()=> {onAdd({title, description, priority})
                    if (formRef.current) {
                        formRef.current.reset()
                    }
                }}
            > Добавить задачу</button>
        </form>
    )   
}
export default AddTask