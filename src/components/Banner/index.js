import styles from './banner.module.css'


function Banner({ imagem }) {
    return(
        <div className={styles.capa} style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')`}}>         
            Olá Mundo
        </div>
        
    )

}

export default Banner