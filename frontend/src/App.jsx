import styles from './App.module.css'
import AddProduct1 from './components/UI/AddProduct1'
import AddProduct2 from './components/UI/AddProduct2'

function App() {
  return(
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Домашнее задание по React №6</h1>
      </main>
      <aside className={styles.aside}>
        <AddProduct1/>
        <AddProduct2/>
      </aside>
    </div>
  )
}

export default App
