import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"
import { useState } from "react"
import { items } from "../../Utils/BasketProducts"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, deleteAllProducts, setAllProducts} from "../../Redux/Basket"


export function Basket ({openIsBasket}) {
    const basketProducts = useSelector(state => state.basketProducts.items)
    const dispatch = useDispatch()
    console.log(basketProducts)
    function handleClick() {
       openIsBasket(false)
    }

    // const [basketItems, setBasketItems] = useState(items)

    function handleDelete (item) {
        dispatch(deleteProduct(item))
    }

    function handleDeleteAll() {
        dispatch(deleteAllProducts())
    }

    function setBasketItems(products) {
        dispatch(setAllProducts(products))
    }

    return <div className={styles.basket}>
        <button className={styles.btnCloseBasket} onClick={handleClick}></button>
        <div className={styles.productContainer}>
            {basketProducts.map((item, index) => {
                return <ProductBasket item={item} key={index} basketItems={basketProducts} setBasketItems={setBasketItems} handleDelete={handleDelete}/>
            })}
        </div>
        <div className={styles.contDeleteAll}>
            <p className={styles.countPrice}>Amount of goods: {basketProducts.reduce((sum, item) => item.price * item.total + sum, 0)}$</p>
            <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete all</button>
        </div>
    </div>
}