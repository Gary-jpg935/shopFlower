import styles from "./Basket.module.css"
import { ProductBasket } from "../ProductBasket/ProductBasket"
import { useState } from "react"

const items = [{
    title: `flower`,
    description: `white flower`,
    price: 18,
    id: 1,
    total: 1
},
{
    title:`flower`,
    description: `black flower`,
    price: 19,
    id: 2,
    total: 1
},
{
    title:`flower`,
    description: `green flower`,
    price: 16,
    id: 3,
    total: 1
},
{
    title:`flower`,
    description: `yellow flower`,
    price: 14,
    id: 4,
    total: 1
}]

export function Basket ({openIsBasket}) {
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

    // передать сумму всех продуктов корзины
    // продукты корзины хранятся в состоянии basketItems
    // для получения суммы всех элементов basketItems - использовать метод массива reduce


    return <div className={styles.basket}>
        <button className={styles.btnCloseBasket} onClick={handleClick}></button>
        <div className={styles.productContainer}>
            {basketItems.map((item, index) => {
                return <ProductBasket item={item} key={index} basketItems={basketItems} setBasketItems={setBasketItems} handleDelete={handleDelete}/>
            })}
        </div>
        <div className={styles.contDeleteAll}>
            <p className={styles.countPrice}>Amount of goods: {basketItems.reduce((sum, item) => item.price + sum, 0)}$</p>
            <button className={styles.deleteAll} onClick={handleDeleteAll}>Delete all</button>
        </div>
    </div>
}