import { useState } from "react"
import UserCard from "./components/UI/UserCard/UserCard"

function App() {
  return( 
    <div>
      <h1>Домашнее задание по React №1</h1>
      <button onClick= { () => alert("Hello World")
      } >
        Нажми меня 
      </button>
      <UserCard  name="Иван" age={25} city="Москва"/>
    </div>
  )
}

export default App
