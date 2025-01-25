import styles from "./Modal.module.css"

export function Modal({setIsOpen, children}){
    function handleClick() {
        setIsOpen(false)
    }

    return <div className={styles.overlay}>
        <div className={styles.modal}>
            <button className={styles.btnClose} onClick={handleClick}>Close</button>
            {children}
        </div>
    </div>
}