import { useState } from "react"
import ToggleBlock from "./components/UI/ToggleBlock"

function App() {
  const [showHideBlock,setShowHideBlock] = useState(false)
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return(
      <>
        <h1>Домашнее задание по React №3 часть №1</h1>
        <button onClick = {() => setShowHideBlock(!showHideBlock)}>
          {!showHideBlock ? "Показать":"Скрыть"} блок с текстом 
        </button>
        {showHideBlock && <ToggleBlock/>}
        <h1>Домашнее задание по React №3 часть №2</h1>
        <button onClick = {() => setIsLoggedIn(!isLoggedIn)}> 
          {!isLoggedIn ? "Войти ":"Выйти"}
        </button>
      </>
  )
}

export default App
