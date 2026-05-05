'use client';

import { useParams, useRouter } from 'next/navigation';
import { destinos } from '../../data/destinos';
import { Destino } from '../../types/destino';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/DetalheDestino.module.css';

export default function DetalheDestino() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  
  const destino: Destino | undefined = destinos.find(d => d.id === Number(id));

  if (!destino) {
    return (
      <Layout>
        <div className={styles.erroContainer}>
          <div className={styles.erro}>
            <span className={styles.erroIcon}>🔍</span>
            <h1>Destino não encontrado</h1>
            <p>O destino que você procura não existe ou foi removido.</p>
            <button 
              onClick={() => router.push('/destinos')}
              className={styles.voltarButton}
            >
              ← Voltar para Destinos
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.detalheContainer}>
          <div className={styles.imagemContainer}>
            <img 
              src={destino.imagem} 
              alt={destino.nome}
              className={styles.imagem}
            />
            <div className={styles.imagemOverlay}>
              <h1 className={styles.nomeImagem}>{destino.nome}</h1>
              <span className={styles.paisImagem}>{destino.pais}</span>
            </div>
          </div>
          
          <div className={styles.informacoes}>
            <p className={styles.descricao}>{destino.descricao}</p>
            
            <div className={styles.detalhesGrid}>
              <div className={styles.detalheItem}>
                <span className={styles.label}>🌍 País</span>
                <span className={styles.valor}>{destino.pais}</span>
              </div>
              <div className={styles.detalheItem}>
                <span className={styles.label}>💵 Moeda</span>
                <span className={styles.valor}>{destino.moeda}</span>
              </div>
              <div className={styles.detalheItem}>
                <span className={styles.label}>🗣️ Idioma</span>
                <span className={styles.valor}>{destino.idioma}</span>
              </div>
              <div className={styles.detalheItem}>
                <span className={styles.label}>🌡️ Clima</span>
                <span className={styles.valor}>{destino.clima}</span>
              </div>
              {destino.melhorEpoca && (
                <div className={styles.detalheItem}>
                  <span className={styles.label}>📅 Melhor Época</span>
                  <span className={styles.valor}>{destino.melhorEpoca}</span>
                </div>
              )}
            </div>

            {destino.pontosTuristicos && destino.pontosTuristicos.length > 0 && (
              <div className={styles.pontosTuristicos}>
                <h3 className={styles.pontosTitulo}>🏛️ Pontos Turísticos</h3>
                <ul className={styles.pontosLista}>
                  {destino.pontosTuristicos.map((ponto, index) => (
                    <li key={index} className={styles.pontoItem}>
                      {ponto}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className={styles.botoes}>
              <button 
                onClick={() => router.back()}
                className={styles.voltarButton}
              >
                ← Voltar
              </button>
              <button 
                onClick={() => router.push('/destinos')}
                className={styles.todosButton}
              >
                Todos os Destinos
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}