import ContactList from '@components/UI/ContactList'
import AddContact from '@components/UI/AddContact'
import HomePage from '@components/UI/HomePage'
import AboutPage from '@components/UI/AboutPage'
import ContactsPage from '@components/UI/ContactsPage'
import NotFoundPage from '@components/UI/NotFoundPage'
import ContactsDetailsPage from '@components/UI/ContactsDetailsPage'
import HomeWork9 from '@components/HomeWork9'
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


  
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
    <>
    <Router>
          <Routes>
            <Route path="/" element={
              <div className={styles.container}>
                <main className={styles.main}>
                  <h1>Домашнее задание по React №8 Часть 2</h1>
                  <div className={styles.linksContainer}>
                    <Link to="/home">На домашнюю страницу</Link>
                    <Link to="/HomeWork9">К Домашней работе №9</Link>
                  </div>
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
            }/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/contacts/:id" element={<ContactsDetailsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/HomeWork9" element={<HomeWork9/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
