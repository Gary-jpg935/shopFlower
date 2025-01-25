import styles from "./main.module.css"
import { useEffect, useState } from "react"
import { Button } from "../Button/Button" 

export function Main() {
    const [values, setValues] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        if(values.title === `` || values.description === ``){
            setIsActiveBtn(false)
        }
        else{
            setIsActiveBtn(true)
        }
    }, [values])

    const [isActiveBtn, setIsActiveBtn] = useState(false)
    

    function handleInput(event) {
        setValues({...values, [event.target.name] : event.target.value})
    }


    function handleSubmit(event) {
        event.preventDefault()
        console.log(values)
    }

    return <main className={styles.main}>
        <form className={styles.container} onSubmit={handleSubmit}>
            <h2 className={styles.container_title}>Title: {values.title}</h2>
            <input type="text" className={styles.input} value={values.title} onInput={handleInput} name="title"/>
            <h2 className={styles.container_title}>Description: {values.description}</h2>
            <input type="text" className={styles.input} value={values.description} onInput={handleInput} name="description"/>
            <Button isActiveBtn={isActiveBtn}/>
        </form>
    </main>
}