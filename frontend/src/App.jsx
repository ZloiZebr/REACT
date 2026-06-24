import { useState } from "react"
import UserCard from "./components/UI/UserCard/UserCard"
import Product from "./components/UI/Product/Product"

function App() {
  return( 
    <div>
      <h1>Домашнее задание по React №2</h1>
      <UserCard  name="Иван" age={25} city="Москва"/>
      <Product title="iPhone" price={50000} category="Электроника" inStock={false} />
    </div>
  )
}

export default App
