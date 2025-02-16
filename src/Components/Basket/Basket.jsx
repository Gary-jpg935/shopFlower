import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"
import { useState } from "react"
import { items } from "../../Utils/BasketProducts"
import { useSelector } from "react-redux"



export function Basket ({openIsBasket}) {
    const basketProducts = useSelector(state => state.basketProducts.items)
    console.log(basketProducts)
    function handleClick() {
       openIsBasket(false)
    }

    const [basketItems, setBasketItems] = useState(items)

    function handleDelete (item) {
        const arr = basketItems.filter((elem) => elem.id !== item.id)
        console.log(item)
        setBasketItems(arr)
    }

    function handleDeleteAll() {
        setBasketItems([])
    }


    return <div className={styles.basket}>
        <button className={styles.btnCloseBasket} onClick={handleClick}></button>
        <div className={styles.productContainer}>
            {basketItems.map((item, index) => {
                return <ProductBasket item={item} key={index} basketItems={basketItems} setBasketItems={setBasketItems} handleDelete={handleDelete}/>
            })}
        </div>
        <div className={styles.contDeleteAll}>
            <p className={styles.countPrice}>Amount of goods: {basketItems.reduce((sum, item) => item.price * item.total + sum, 0)}$</p>
            <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete all</button>
        </div>
    </div>
}