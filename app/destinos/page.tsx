import { destinos } from '@/app/data/destinos';
import CardDestino from '@/app/components/CardDestino/CardDestino';
import styles from '@/app/styles/Destinos.module.css';

export default function Destinos() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.titulo}>Destinos Turísticos</h1>
        <p className={styles.subtitulo}>
          Escolha entre nossos destinos incríveis e planeje sua próxima viagem
        </p>
        <div className={styles.contador}>
          <span className={styles.contadorNumero}>{destinos.length}</span>
          <span className={styles.contadorTexto}>destinos disponíveis</span>
        </div>
      </div>
      
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}