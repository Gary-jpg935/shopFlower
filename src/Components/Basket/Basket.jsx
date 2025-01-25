import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"

export function Basket () {
    return <div className={styles.basket}>
        <ProductBasket/>
    </div>
}