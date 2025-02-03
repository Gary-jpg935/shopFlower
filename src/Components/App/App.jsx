import styles from "./App.module.css";
import Header from "../Header/Header";
import {Container} from "../Container/Container"
import { Main } from "../Main/main";
import {ProductCards} from "../ProductCards/ProductCards";

function App() {
  return <div className={styles.App}>
    <Header />
    {/* <Main /> */}
    {/* <ProductCards /> */}
    <Container />
  </div>
}

export default App;
