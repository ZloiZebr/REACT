import styles from './AddContact.module.css'
import { useRef } from 'react'

const AddContact = ({onAdd}) => {

    const formRef = useRef(null)
    

    return(
        <form ref = {formRef} className = {styles.form}>
            <span>Добавить новый контакт</span>
            <input 
                type="text"
                name = "name"
                placeholder='Введите имя контакта'
            />

            <input
                type="number"
                name = "phoneNumber"
                placeholder='Введите номер телефона в формате +7 000 000 00 00'
            />
            
            <input
                type="email"
                name = "eMail"
                placeholder='Введите номер электронной почты'
            />

            <button type="button"
                onClick={()=> { 
                    const contactData = formRef.current
                    const newFormData = new FormData(contactData)
                    const newContactObject = Object.fromEntries(newFormData)
                    onAdd(newContactObject)
                    if (formRef.current) {
                        formRef.current.reset()
                    }
                }}
            > Добавить контакт</button>
        </form>
    )   
}
export default AddContact