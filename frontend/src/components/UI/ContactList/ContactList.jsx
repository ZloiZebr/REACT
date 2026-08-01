import styles from './ContactList.module.css'
import ContactCard from '@components/UI/ContactCard'

const ContactList = ({contacts,contactsLoading,contactsError,onDelete,onEdit}) => {
    return(
        <>
            <h1>Домашнее задание по React №6</h1>
            <h2>Список контактов</h2>
            <ul>{
                contactsLoading ? (
                <div className="d-flex align-items-center">
                    <strong role="status">Загрузка  контактов...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>
                ) : contactsError ? (
                    <div>{contactsError}</div>
                ) : contacts.length !== 0 ? (
                    contacts.map(contact => (
                        <ContactCard
                            key={contact.id}
                            contact ={contact}
                            onDelete = {onDelete}
                            onEdit = {onEdit}
                        />
                    ))
                    ) : (
                        <div>Контактов ещё нет</div>
                    )
            }
            </ul>
        </>
    )
}

export default ContactList