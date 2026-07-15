import styles from './ProductList.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [productsLoading, setProductsLoading] = useState(true)
    const [productsError, setProductsError] = useState(null)
    
    useEffect(() => {
        const getProducts = async() => { 
            try {
                const response = await axios.get(`${API_URL}/products`)
                setProducts(response.data)
            }
            catch(error) {
                console.error(error)
                setProductsLoading(false)
                setProductsError("Не удалось загрузить данные.")
            }
            finally {
                setProductsLoading(false)
            }
        }
    getProducts()    
    }, [])
    return(
        <>
            <h1>Домашнее задание по React №4</h1>
            <h2>Список товаров</h2>
            <ul>{
                productsLoading ? (
                <div className="d-flex align-items-center">
                    <strong role="status">Загрузка товаров...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>
                ) : productsError ? (
                    <div>{productsError}</div>
                ) : (
                    products.map(product => (
                    <li key={product.id}>
                        <div className={styles.poductCard}>
                            <h3>Наименование товара - {product.title}</h3>
                            <p>Цена: {product.price} $</p>
                            <p>Описание: {product.description}</p>
                        </div>
                    </li>
                    ))
                )
            }
            </ul>
        </>
    )
}

export default ProductList