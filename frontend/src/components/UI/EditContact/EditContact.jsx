import styles from './EditContact.module.css'
import { useRef,useState } from 'react'

const EditContact= ({ contact, onEdit }) => {
    const [name, setName] = useState(contact.name)
    const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber)
    const [eMail, setEMail] = useState(contact.eMail)

    const handleSubmit = () => {
        onEdit({
            id: contact.id,
            name,
            phoneNumber,
            eMail
        })
    }

    return (
        <div className = {styles.mainContainer}>
            <form className = {styles.form}>
                <span>Редактировать контакт</span>
                <input 
                    type="text"
                    name = "name"
                    value = {name}
                    placeholder='Введите имя контакта'
                    onChange={e => setName(e.target.value)}
                />
            
                <input
                    type="number"
                    name = "phoneNumber"
                    value = {phoneNumber}
                    placeholder='Введите номер телефона в формате +7 000 000 00 00'
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                    
                <input
                    type="email"
                    name = "eMail"
                    value = {eMail}
                    placeholder='Введите номер электронной почты'
                    onChange={e => setEMail(e.target.value)}
                />
        
                <button 
                    type="button"
                    onClick={handleSubmit}
                >   
                    Сохранить изменения
                </button>
            </form>
        </div>
  )
}

export default EditContact