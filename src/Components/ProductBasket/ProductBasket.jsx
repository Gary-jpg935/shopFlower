import styles from "./ProductBasket.module.css"

export function ProductBasket ({item}){
    return <div className={styles.productBasket}>
        <div className={styles.productBasketCont}>
            <button className={styles.btnBasketPlus}>+</button>
            <button className={styles.btnBasketMinus}>-</button>
            <button className={styles.btnBasketDelete}>Delete</button>
        </div>
    </div>
}