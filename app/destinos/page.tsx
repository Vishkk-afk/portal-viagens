import { destinos } from '../data/destinos';
import CardDestino from '../components/CardDestino/CardDestino';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Destinos.module.css';

export default function Destinos() {
  return (
    <Layout>
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
    </Layout>
  );
}