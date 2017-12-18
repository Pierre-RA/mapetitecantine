export interface Page {
  id: string;
  date: string;
  slug: string;
  content: {
    rendered: string;
  };
}
