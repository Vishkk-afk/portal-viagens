export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  pais: string;
  moeda: string;
  idioma: string;
  clima: string;
  melhorEpoca?: string;
  pontosTuristicos?: string[];
}

export interface DestinoCardProps {
  destino: Destino;
}