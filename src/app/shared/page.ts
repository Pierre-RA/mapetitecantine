export interface Page {
  id: string;
  date: string;
  slug: string;
  content: {
    rendered: string;
  };
  acf?: {
    bandeau_haut: string;
    menu_haut_gauche: string;
    menu_haut_centre: string;
    menu_haut_droite: string;
    bandeau_milieu: string;
    menu_bas_gauche: string;
    menu_bas_centre: string;
    menu_bas_droite: string;
    bandeau_bas: string;
  };
}
