import styles from "./ProductCards.module.css"
import { ProductCard } from "../ProductCard/ProductCard"

const products = [{
        title: `Cream`,
        description: `Face cream`,
        price: `10$`
    },
    {
        title: `Perfume`,
        description: `Sweet perfume`,
        price: `30.6$`
    },
    {
        title: `Lipstick`,
        description: `Vanilla scented lipstick`,
        price: `19.3$`
    }]

export function ProductCards() {
    return <div className={styles.productCards}>
        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}
        {products.map((item, index) => <ProductCard item={item}/>)}
    </div>
}