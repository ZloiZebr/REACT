import { useState } from "react"
import ToggleBlock from "./components/UI/ToggleBlock"

function App() {
  const [showHideBlock,setShowHideBlock] = useState(false) 
  return(
      <>
        <h1>Домашнее задание по React №3</h1>
        <button onClick = {() => setShowHideBlock(!showHideBlock)}>
          {!showHideBlock ? "Показать":"Скрыть"} блок с текстом 
        </button>
        {showHideBlock && <ToggleBlock/>}
      </>
  )
}

export default App
