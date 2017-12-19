import { Link } from './link';

export interface FacebookPost {
  id: string;
  created_time: string;
  message: string;
  story: string;
  picture: string;
  full_picture: string;
  actions: Array<Link>;
  link: string;
}
