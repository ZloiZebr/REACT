import { useDispatch, useSelector } from 'react-redux'
import styles from './HomeWork10.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createAddItemAction, createRemoveItemAction, createClearCartAction } from '@store/slices/cartSlice.js'


const HomeWork10 = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const [itemName, setItemName] = useState('')


    const addItem = (newItem) => {
        dispatch(createAddItemAction(newItem))
    }

    const removeItem = (itemToRemove) => {
        dispatch(createRemoveItemAction(itemToRemove))
    }

    const clearCart = () => {
        dispatch(createClearCartAction())
    }

    return (
        <>
            <div className={styles.cartContainer}>
                <h2>Корзина товаров ДЗ №10</h2>
                <span className={styles.countTotal}>Всего товаров в корзине: {total}</span>
                <div className={styles.addItemContainer}>
                    <form className = {styles.itemInputForm}>
                        <input 
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder='Введите название товара'
                        />
                        <button type="button"
                            onClick={()=> {
                                const newItem = {id: items.length + 1, name: itemName, quantity: 1}
                                addItem(newItem)
                                setItemName('')
                            }}
                        > 
                            Добавить товар
                        </button>
                    </form>
                    <button onClick={() => clearCart()} className={styles.btnClearCart}>
                        Очистить корзину
                    </button>
                </div>
                <div className={styles.itemList}>
                    {items.length === 0 ? (
                        <span className={styles.emptyCartMessage}>Корзина пуста</span>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className={styles.itemCard}>
                                <h3>Товар: {item.name.toUpperCase()}</h3>
                                <span>Количество: {item.quantity}</span>
                                <div className={styles.itemButtons}>
                                    <button onClick={() => removeItem(item)} className={styles.btnRemove}>
                                        Удалить
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.linksContainer}>
                    <Link to="/">← На главную</Link>
                </div>
            </div>
        </>
    )
}

export default HomeWork10
