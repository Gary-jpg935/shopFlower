import { ProductCards } from "../ProductCards/ProductCards"
import styles from "./ProductCard.module.css"

    export function ProductCard({item}) {
        const Component = function() {return item.img} 
        return <div className={`${styles.card} ${styles.card1}`}>
            <Component/>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.productCard}>
            <h2 className={styles.price}>{item.price}$</h2>
            <button className={styles.btn}>Agregar al carrito</button>
        </div>
    </div>

    }