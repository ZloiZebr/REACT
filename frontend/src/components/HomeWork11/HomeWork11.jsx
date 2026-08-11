import { useDispatch, useSelector } from 'react-redux'
import styles from './HomeWork11.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getProducts, addProduct, deleteProduct } from '@store/slices/cartSliceHW11.js'


const HomeWork11 = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cartHW11.products)
    const total = useSelector(state => state.cartHW11.total)
    const productsStatus = useSelector(state => state.cartHW11.productsStatus)
    const productsErrors = useSelector(state => state.cartHW11.productsErrors)
    const addProductStatus = useSelector(state => state.cartHW11.addProductStatus)
    const addProductError = useSelector(state => state.cartHW11.addProductErrors)
    const deleteProductStatus = useSelector(state => state.cartHW11.deleteProductStatus)
    const deleteProductError = useSelector(state => state.cartHW11.deleteProductErrors)
    const [productName, setProductName] = useState('')
    const [deletedProduct, setDeletedProduct] = useState(null)
    const [addedProduct, setAddedProduct] = useState(null)

    return (
        <>
            <div className={styles.cartContainer}>
                <h2>Список товаров ДЗ №11</h2>
                <span className={styles.countTotal}>Всего товаров в базе данных: {total}</span>
                <div className={styles.addItemContainer}>
                    <form className = {styles.itemInputForm}>
                        <input 
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder='Введите название товара'
                        />
                        <button type="button"
                            onClick={()=> {
                                const newProduct = {name: productName, quantity: 1}
                                dispatch(addProduct(newProduct))
                                setAddedProduct(newProduct)
                                setProductName('')
                            }}
                        > 
                            Добавить товар
                        </button>
                    </form>
                </div>
                <div className={styles.statusContainer}>
                    {addProductStatus === 'failed' && (
                        <div className={styles.addErrorMessage}>
                            Ошибка добавления товара "{productName}": {addProductError}
                        </div>
                    )}
                    {addProductStatus === 'adding' && (
                        <div className={styles.addingMessage}>
                            <span className="spinner-border spinner-border-sm text-success me-2" role="status" aria-hidden="true"></span>
                            Добавляю товар "{addedProduct.name}"...
                        </div>
                    )}
                    {addProductStatus === 'succeeded' && (
                        <div className={styles.addSuccessMessage}>
                        Товар "{addedProduct.name}" успешно добавлен!
                        </div>
                    )}

                    {deleteProductStatus === 'failed' && (
                        <div className={styles.deleteErrorMessage}>
                            Ошибка удаления товара: {deleteProductError}
                        </div>
                    )}
                    {deleteProductStatus === 'deleting' && (
                        <div className={styles.deletingMessage}>
                            <span className="spinner-border spinner-border-sm text-danger me-2" role="status" aria-hidden="true"></span>
                            Удаляю товар {deletedProduct.name}...
                        </div>
                    )}
                    {deleteProductStatus === 'succeeded' && (
                        <div className={styles.deleteSuccessMessage}>
                            Товар "{deletedProduct.name}" успешно удален!
                        </div>
                    )}
                    </div>

                <button onClick={() => dispatch(getProducts())}
                    disabled={productsStatus === 'loading'}
                    className={styles.loadButton}
                    >Загрузить товары из Базы Данных
                </button>
                <div className={styles.itemList}>
                    {productsStatus === 'loading' && (
                        <div className={styles.statusMessage}>
                            <span className="spinner-border text-primary d-block mx-auto mb-3" role="status" style={{ width: '3rem', height: '3rem' }}></span>
                            Загрузка...
                            </div>
                    )}
                    {productsStatus === 'failed' && (
                        <div className={styles.errorMessage}>
                        Ошибка загрузки из Базы Данных: {productsErrors}
                        </div>
                    )}
                    {productsStatus === 'succeeded' && (
                        <>
                        {products.length > 0 ? (
                            products.map((product) => (
                            <div key={product.id} className={styles.itemCard}>
                                <div>
                                <h3>Товар: {product.name}</h3>
                                <span>Количество: {product.quantity}</span>
                                </div>
                                <div className={styles.itemButtons}>
                                <button
                                    onClick={() => {
                                    if (window.confirm(`Вы уверены, что хотите удалить товар "${product.name}"?`)) {
                                        setDeletedProduct(product)
                                        dispatch(deleteProduct(product.id))
                                    }
                                    }}
                                    className={styles.btnRemove}
                                    type="button"
                                >
                                    Удалить
                                </button>
                                </div>
                            </div>
                            ))
                        ) : (
                            <div className={styles.emptyMessage}>Товары отсутствуют</div>
                        )}
                        </>
                    )}
                    </div>
                <div className={styles.linksContainer}>
                    <Link to="/">← На главную</Link>
                </div>
            </div>
        </>
    )
}

export default HomeWork11
