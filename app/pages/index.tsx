import { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Descubra o Mundo com o Portal Viagens
        </h1>
        <p className={styles.subtitle}>
          Explore destinos incríveis e planeje sua próxima aventura
        </p>
        <Link href="/destinos" className={styles.ctaButton}>
          Explorar Destinos →
        </Link>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🌍</div>
          <h3>Destinos Globais</h3>
          <p>Explore destinos em todos os continentes com informações detalhadas</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📸</div>
          <h3>Imagens Incríveis</h3>
          <p>Visualize belas paisagens e pontos turísticos antes de viajar</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🗺️</div>
          <h3>Informações Detalhadas</h3>
          <p>Saiba tudo sobre cada destino: clima, moeda, idioma e mais</p>
        </div>
      </section>
    </div>
  );
};

export default Home;