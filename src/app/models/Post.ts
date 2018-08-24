import Author from 'app/models/Author';

export default interface Post {
  id: number,
  author: Author,
  likes: number,
  reposts: Post[]
}
