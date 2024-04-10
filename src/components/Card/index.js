import { useFavoritoContext } from "contextox/Favoritos";
import styles from "./card.module.css";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png"

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const favoritoTrue = favorito.some((fav) => fav.id === id);
  const icone = !favoritoTrue ? iconeFavoritar : iconeDesfavoritar
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
        src={icone}
        alt="Favoritar Filme"
      />
    </div>
  );
}

export default Card;
