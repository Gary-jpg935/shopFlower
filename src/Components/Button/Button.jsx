import styles from "./Button.module.css"


export function Button({isActiveBtn}) {
    return <button className={`${styles.button} ${isActiveBtn ? styles.button_green : styles.button_red}`}>Save</button>
}