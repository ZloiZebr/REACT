import styles from './ContactCard.module.css'
import { GrEdit } from "react-icons/gr"
import { GrTrash } from "react-icons/gr"
import { useState } from 'react'
import { Link } from 'react-router-dom'

import EditContact from '@components/UI/EditContact'



const ContactCard = ({contact,onDelete,onEdit}) => {
    const [editFormVisible, setEditFormVisible] = useState(false)


    return(
        <div className={styles.contactCard}>
            <GrTrash
                title="Удалить"
                className={styles.deleteIcon}
                onClick={
                    () => confirm("Вы уверены что хотите удалить этот контакт?") && onDelete(contact.id)
                }
                size={20}
                color="red" 
            />
            <GrEdit 
                title="Редактировать"
                className={styles.editIcon}
                onClick={() => setEditFormVisible(!editFormVisible)}
                size={30}
                color="green"
            />
            <Link to={`contacts/${contact.id}`}>
                <strong>{contact.name}</strong>
            </Link>
            <p>Номер телефона: {contact.phoneNumber}</p>
            <p>Адрес электронной почты: {contact.eMail}</p>
            
            {editFormVisible && 
                <EditContact 
                    contact={contact} 
                    onEdit={onEdit} 
                />
            }
        </div>

    )
}

export default ContactCard