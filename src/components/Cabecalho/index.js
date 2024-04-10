import logo from "./logo.png";
import { Link } from "react-router-dom";
import styles from "./cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
