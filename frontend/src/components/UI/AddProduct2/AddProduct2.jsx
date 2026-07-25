import styles from './AddProduct2.module.css'
import { useRef } from 'react'

const AddProduct2 = () => {

    const formRef = useRef(null)
    

    return(
        <form ref = {formRef} className = {styles.form}>
            <span>Добавить товар используя FormData и очистку useRef и reset()</span>
            <input 
                type="text"
                name = "name"
                placeholder='Название товара'
            />

            <input
                type="number"
                name = "price"
                placeholder='Цена товара $'
            />
            
            <span>Выберите категорию товара:</span>
            <select 
                name="category"
            >       
                    <option value="">-- Выберите --</option>
                    <option value="Электроника">Электроника</option>
                    <option value="Одежда">Одежда</option>
                    <option value="Товары для дома">Товары для дома</option>
                    <option value="Прочее">Прочее</option>
            </select>

            <button type="button"
                onClick={()=> { 
                    const productData = formRef.current
                    const formData = new FormData(productData)
                    const objectData = Object.fromEntries(formData)
                    objectData.price = Number(objectData.price)
                    console.log(objectData)
                    if (formRef.current) {
                        formRef.current.reset()
                    }
                }}
            > Добавить товар</button>
        </form>
    )   
}
export default AddProduct2