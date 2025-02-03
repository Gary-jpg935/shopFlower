import { ProductCard } from "../ProductCard/ProductCard"
import {ReactComponent as Flower1} from '../../Assets/img/flower1.svg'
import {ReactComponent as Flower2} from '../../Assets/img/flower2.svg'
import {ReactComponent as Flower3} from '../../Assets/img/flower3.svg'
import {ReactComponent as Flower4} from '../../Assets/img/flower4.svg'
import {ReactComponent as Flower5} from '../../Assets/img/flower5.svg'
import {ReactComponent as Flower6} from '../../Assets/img/flower6.svg'
import styles from "./Container.module.css"


const products = [{
    title: `flower`,
    description: `white flower`,
    price: 10,
    img: <Flower1/>
},
{
    title: `flower`,
    description: `yellow flower`,
    price: 9,
    img: <Flower2/>
},
{
    title: `flower`,
    description: `green flower`,
    price: 8.7,
    img: <Flower3/>
},
{
    title: `flower`,
    description: `flower in a pot`,
    price: 11.2,
    img: <Flower4/>
},
{
    title: `flower`,
    description: `lily lower`,
    price: 6,
    img: <Flower5/>
},
{
    title: `flower`,
    description: `rose flower`,
    price: 7,
    img: <Flower6/>
}]

export function Container () {
    return <div className={styles.container}>
        <div className={styles.cont}>
            <div className={styles.contTexts}>
                <p className={styles.textEntregas}>Entregas a domicilio gratis </p>
                <p className={styles.textPlantas}>Plantas y Semillas   Macetas   Accesorios  Blog Contacto</p>
                <div className={styles.greenland}>
                    <p className={styles.textGreenland}>Green Land </p>
                </div>
                <p className={styles.textPlaneta}>El planeta de las plantas</p>
                <p className={styles.textTierra}>De nuestra tierra hasta tu hogar </p>
            </div>
        </div>

        <div className={styles.contFlower}>
            <div className={styles.contGrat}>Envío gratuito todo España</div>
            <div className={styles.contCliente}>Atención al cliente las 24hrs</div>
            <div className={styles.contDe}>Garantía de devolución</div>
        </div>

        <div className={styles.containerCard}>
            <div className={styles.cont1}>
                {products.map((item, index) => {
                    return <ProductCard item={item} key={index}/>
                })}
            </div>

            <div className={styles.contPlanta}>
                <button className={styles.btnPlanta}>Consigue tu planta ideal</button>
                <p className={styles.contText}>Más populares</p>
            </div>

            <div className={styles.imgCont}>
                <div className={styles.contImg}>
                    <div className={`${styles.imgContainer} ${styles.img1}`}></div>
                    <p className={styles.imgText}>5 pasos para transplantar de manera fácil y rápida</p>
                </div>
                <div className={styles.contImg}>
                    <div className={`${styles.imgContainer} ${styles.img2}`}></div>
                    <p className={styles.imgText}>Los primeros cuidados de una planta</p>
                </div>
            </div>

            <div className={styles.containerImg}>
                <div className={`${styles.img} ${styles.img3}`}></div>
                <div className={`${styles.img} ${styles.img4}`}></div>
                <div className={`${styles.img} ${styles.img5}`}></div>
            </div>

            <div className={styles.siguenos}>
                <p className={styles.siguenosText}>Síguenos...</p>
                <div className={styles.contSiguenos}>
                    <div className={`${styles.imgSiguenos} ${styles.imgSiguenos1}`}></div>
                    <div className={`${styles.imgSiguenos} ${styles.imgSiguenos2}`}><oldPhone/></div>
                    <div className={`${styles.imgSiguenos} ${styles.imgSiguenos3}`}></div>
                    <div className={`${styles.imgSiguenos} ${styles.imgSiguenos4}`}></div>
                </div>
            </div>
        </div>
            <footer className={styles.footer}>
                <div className={styles.footerCont}>
                    <p className={styles.footerText}>Contacto</p>
                    <p className={styles.footerText}>Email: info@greenlad.com</p>
                    <p className={styles.footerText}>España, 03007</p>
                    <p className={styles.footerText}>Aviso legal</p>
                </div>
                <div className={styles.footerImg}></div>
                <div className={styles.containerFooter}>
                    <a className={styles.containerFooterText}>Plantas y Semillas</a>
                    <a className={styles.containerFooterText}>Macetas</a>
                    <a className={styles.containerFooterText}>Accesorios</a>
                    <a className={styles.containerFooterText}>Blog</a>
                    <a className={styles.containerFooterText}>Contacto</a>
                </div>
            </footer>
    </div>
}