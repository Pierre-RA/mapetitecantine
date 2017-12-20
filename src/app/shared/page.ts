export interface Page {
  id: string;
  date: string;
  slug: string;
  content: {
    rendered: string;
  };
  acf?: {
    image_haut_gauche: string;
    image_haut_droite: string;
    image_bas_gauche: string;
    image_bas_droite: string;
    texte_haut_gauche: string;
    texte_haut_droite: string;
    texte_bas_gauche: string;
    texte_bas_droite: string;
  };
}
