import styles from "./Header.module.css"
import { Modal } from "../Modal/Modal";
import { createPortal } from "react-dom";
import { useState } from "react";
import { FormLogin } from "../FormLogin/FormLogin";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(true)
    }


    return <div className={styles.Header}>
        <h2 className={styles.HeaderLogo}>Logo</h2>
        <input type="text" className={styles.input}/>
            <button className={styles.BtnHeader} onClick={handleClick}>Login</button>
        {isOpen && createPortal(<Modal setIsOpen = {setIsOpen}><FormLogin setIsOpen = {setIsOpen}/></Modal>, document.body)}
    </div>
}

export default Header;