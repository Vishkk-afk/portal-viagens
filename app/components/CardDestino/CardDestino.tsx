import Link from 'next/link';
import { DestinoCardProps } from '../../types/destino';
import styles from './CardDestino.module.css';

export default function CardDestino({ destino }: DestinoCardProps) {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.imagemContainer}>
          <img 
            src={destino.imagem} 
            alt={destino.nome}
            className={styles.imagem}
            loading="lazy"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.nome}>{destino.nome}</h3>
          <span className={styles.pais}>{destino.pais}</span>
          <p className={styles.descricao}>{destino.descricao}</p>
          <span className={styles.saibaMais}>Saiba mais →</span>
        </div>
      </div>
    </Link>
  );
}