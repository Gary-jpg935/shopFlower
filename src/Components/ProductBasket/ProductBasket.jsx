import styles from "./ProductBasket.module.css"

export function ProductBasket ({item, handleDelete}){
    return <div className={styles.productBasket}>
        <div className={styles.contText}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>
        </div>
        <div className={styles.productBasketCont}>
            <button className={styles.btnBasketPlus}>+</button>
            <button className={styles.btnBasketDelete} onClick={() => handleDelete(item)}>Delete</button>
            <button className={styles.btnBasketMinus}>-</button>
        </div>
    </div>
}