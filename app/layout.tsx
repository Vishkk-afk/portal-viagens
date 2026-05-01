import type { Metadata } from 'next';
import Layout from './components/Layout/Layout';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Portal Viagens',
  description: 'Descubra destinos incríveis para sua próxima viagem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}