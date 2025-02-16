import styles from "./ProductBasket.module.css"
import { setCountPlus, setCountMinus} from "../../Redux/Basket"
import { useDispatch } from "react-redux"

export function ProductBasket ({item, handleDelete, basketItems, setBasketItems}){
    const dispatch = useDispatch()
    

    return <div className={styles.contBasketProduct}>
        <div className={styles.productBasket}>
            <div className={styles.contText}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}$</p>
            </div>
            <div className={styles.productBasketCont}>
                <button className={styles.btnBasketPlus} onClick={() => dispatch(setCountPlus(item))}>+</button>
                <p className={styles.countProduct}>{item.total}</p>
                <button className={styles.btnBasketMinus} onClick={() => dispatch(setCountMinus(item))}>-</button>
                <button className={styles.btnBasketDelete} onClick={() => handleDelete(item)}>Delete</button>
            </div>
        </div>
    </div>
}