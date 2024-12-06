export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: string;
  volume: string;
  pages: string;
  doi: string;
  abstract: string;
  url: string;
  impactFactor?: number;
  citations?: number;
  scopusId?: string;
}