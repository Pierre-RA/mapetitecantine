export interface Picture {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  categories: Array<number>;
  id: number;
  slug: string;
  acf: {
    image_1: {
      alt?: string;
      title?: string;
      url: string;
      sizes?: {
        large: string;
        'medium_large': string;
        medium: string;
        thumbnail: string;
      };
    };
  };
}
