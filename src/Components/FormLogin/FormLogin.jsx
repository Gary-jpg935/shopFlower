import styles from "./FormLogin.module.css"
import { useState } from "react"

export function FormLogin({setIsOpen}) {
    const [value, setValue] = useState({
        phone: ``,
        email: ``
    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(value)
        setIsOpen(false)
    }

    function handleInput(event) {
        setValue({...value, [event.target.name]: event.target.value})
    }
    return  <form action="" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="" className={styles.labelModal}>Your number phone:</label>
                <input type="text" className={styles.input_modal} name="phone" value={value.phone} onInput={handleInput}/>
                <label htmlFor="" className={styles.labelModal}>Your email:</label>
                <input type="text" className={styles.input_modal} name="email" value={value.email} onInput={handleInput}/>
                <button className={styles.sendModal}>Send</button>
            </form>
}