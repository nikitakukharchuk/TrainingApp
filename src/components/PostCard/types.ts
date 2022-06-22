export interface Post {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  author: number;
  title: string;
}

export interface PostCardProps {
  post: Post;
}
