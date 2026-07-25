import styles from './AddProduct1.module.css'
import { useState } from 'react'

const AddProduct1 = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    return(
        <form className = {styles.form}>
            <span>Добавить товар используя useState и очистку через состояния</span>
            <input 
                type="text"
                value = {name}
                placeholder='Название товара'
                onChange={event => setName(event.target.value)}
            />

            <input
                type="number"
                value = {price}
                placeholder='Цена товара $'
                onChange={event => setPrice(Number(event.target.value))}
            />
            
            <span>Выберите категорию товара:</span>
            <select 
                name="category"
                value = {category} 
                onChange={event => setCategory(event.target.value)}
            >       
                    <option value="">-- Выберите --</option>
                    <option value="Электроника">Электроника</option>
                    <option value="Одежда">Одежда</option>
                    <option value="Товары для дома">Товары для дома</option>
                    <option value="Прочее">Прочее</option>
            </select>

            <button type="button"
                onClick={()=> {console.log({name, price, category})
                    setName("")
                    setPrice("")
                    setCategory("")
                }}
            > Добавить товар</button>
        </form>
    )   
}
export default AddProduct1