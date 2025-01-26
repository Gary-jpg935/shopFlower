import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"

const item = {
    title: `flower`,
    description: `white flower`,
    price: 18
}

export function Basket () {
    return <div className={styles.basket}>
        <ProductBasket item={item}/>
    </div>
}