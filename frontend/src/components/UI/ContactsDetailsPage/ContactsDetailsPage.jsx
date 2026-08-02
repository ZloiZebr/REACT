import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import styles from './ContactsDetailsPage.module.css'

const API_URL = import.meta.env.VITE_API_URL


const ContactsDetailsPage = () => {
    const { id } = useParams()

    const [contact, setContacts] = useState(null)
    const [contactsLoading, setContactsLoading] = useState(true)
    const [contactsError, setContactsError] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/contacts/${id}`)
        .then(response => {
        setContacts(response.data)
        setContactsLoading(false)
        })
        .catch(e => {
        console.error('Ошибка загрузки контакта:', e)
        setContactsError('Ошибка! Не удалось загрузить контакт')
        setContactsLoading(false)
        })
    }, [id])

    return (
        <>
            {
            contactsLoading ? (
                <div className="d-flex align-items-center">
                    <strong role="status">Загрузка  контактов...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>
            ) : contactsError ? (
                <div>{contactsError}</div>
            ) : (
                <div className={styles.contactDetail}>
                    <Link className={styles.backLink} to="/home">← На домашнюю страницу</Link>
                    <h1>{contact.name}</h1>
                    <p>Номер телефона: {contact.phoneNumber}</p>
                    <p>Адрес электронной почты: {contact.eMail}</p>
                    <p>Описание контакта: {contact.description}</p>
                </div>
            )
            }
        </>
    )
}

export default ContactsDetailsPage