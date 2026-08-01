import ContactList from '@components/UI/ContactList'
import AddContact from '@components/UI/AddContact'
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'

  
const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [contacts, setContact] = useState([])
  const [contactsLoading, setContactsLoading] = useState(true)
  const [contactsError, setContactsError] = useState(null)

  const addContact = (newContact)=>{
    
    axios.post(`${API_URL}/contacts`,newContact)
      .then(response => setContact([...contacts,response.data]))
  } 

  const deleteContact = (id) => {
    axios.delete(`${API_URL}/contacts/${id}`)
      .then(() => setContact(contacts.filter(contact => contact.id !== id)))
  }

  const editContact = async (editedContact) => {
    await axios.put(`${API_URL}/contacts/${editedContact.id}`, editedContact)
    setContact(contacts.map(contact => contact.id === editedContact.id ? editedContact : contact))
  }

  useEffect(() => {
          const getContacts = async() => { 
              try {
                  const response = await axios.get(`${API_URL}/contacts`)
                  setContact(response.data) 
              }
              catch(error) {
                  console.error(error)
                  setContactsLoading(false)
                  setContactsError("Не удалось загрузить данные.")
              }
              finally {
                  setContactsLoading(false)
              }
          }
      getContacts()    
      }, [])

  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <ContactList
          contacts={contacts}
          contactsLoading={contactsLoading}
          contactsError={contactsError}
          onDelete = {deleteContact}
          onEdit = {editContact}
        />
      </main>
      <aside className={styles.aside}>
        <AddContact
          onAdd={addContact}
        />
      </aside>
    </div>
  )
}

export default App
