import styles from './Product.module.css'

const Product = ({title, price, category, inStock}) => (
    <div className = {styles.product}>
        <h3 className = {styles.title}>Карточка продукта</h3>
        <p>Наименование: {title}</p>
        <p>Цена: {price}</p>
        <p>Категория: {category}</p>
        {inStock? (
            <p className = {styles.available}> Наличие товара: В наличии </p>
        ):
        (
            <p className = {styles.notAvailable}> Наличие товара: Нет наличии </p>
            )}
    </div>
)

export default Product