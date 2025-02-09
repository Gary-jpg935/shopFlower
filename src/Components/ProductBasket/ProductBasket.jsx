import styles from "./ProductBasket.module.css"

export function ProductBasket ({item, handleDelete, basketItems, setBasketItems}){

    function setCountPlus () {
        setBasketItems(basketItems.map((elem) => {
            if(item.id === elem.id) {
                elem.total = elem.total + 1
            }
            return elem
        }))
    }
    
    function setCountMinus() {
        setBasketItems(basketItems.map((minus) => {
            if(item.id === minus.id) {
                minus.total = minus.total - 1
            }
            return minus
        }))
    }

    return <div className={styles.contBasketProduct}>
        <div className={styles.productBasket}>
            <div className={styles.contText}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}$</p>
            </div>
            <div className={styles.productBasketCont}>
                <button className={styles.btnBasketPlus} onClick={setCountPlus}>+</button>
                <p className={styles.countProduct}>{item.total}</p>
                <button className={styles.btnBasketMinus} onClick={setCountMinus}>-</button>
                <button className={styles.btnBasketDelete} onClick={() => handleDelete(item)}>Delete</button>
            </div>
        </div>
    </div>

    // сделать функцию на уменьшение счетчика
    // объединить функцию уменьшения и увеличения
}