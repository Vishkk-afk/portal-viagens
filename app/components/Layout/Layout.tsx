import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            ✈️ Portal Viagens
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/destinos" className={styles.navLink}>
                Destinos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Portal Viagens. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}