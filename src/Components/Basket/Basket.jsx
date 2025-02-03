import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"
import { useState } from "react"

const items = [{
    title: `flower`,
    description: `white flower`,
    price: 18,
    id: 1
},
{
    title:`flower`,
    description: `black flower`,
    price:19,
    id: 2
}]

export function Basket ({openIsBasket}) {
    function handleClick() {
       openIsBasket(false)
    }

    const [basketItems, setBasketItems] = useState(items)

    function handleDelete (item) {
        const arr = basketItems.filter(() => {})
        console.log(item)
        setBasketItems(arr)
    }

    return <div className={styles.basket}>
        <button className={styles.btnCloseBasket} onClick={handleClick}></button>
        {basketItems.map((item, index) => {
            return <ProductBasket item={item} key={index} handleDelete={handleDelete}/>
        })}
    </div>
}