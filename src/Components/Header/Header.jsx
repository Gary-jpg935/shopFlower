import styles from "./Header.module.css"
import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";
import { useState } from "react";
import { FormLogin } from "../FormLogin/FormLogin";
import { Basket } from "../Basket/Basket";
import { ProductBasket } from "../ProductBasket/ProductBasket";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(true)
    }

    const [openBasket, openIsBasket] = useState(false)
    function handleClickBasket() {
        openIsBasket(true)
    }


    return <div className={styles.Header}>
        <h2 className={styles.HeaderLogo}>Logo</h2>
        <input type="text" className={styles.input}/>
        <div className={styles.btnContHeader}>
            {isOpen && createPortal(<Modal setIsOpen = {setIsOpen}><FormLogin setIsOpen = {setIsOpen}/></Modal>, document.body)}
            <button className={styles.BtnHeader} onClick={handleClick}>Login</button>
            {openBasket && createPortal(<Basket openIsBasket={openIsBasket}/>, document.body)}
            <button className={styles.btnBasket} onClick={handleClickBasket}>Basket</button>
        </div>
        </div>
}

export default Header;