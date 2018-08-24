import { History } from 'history';
import Post from 'app/models/Post';
import Author from 'app/models/Author';
import { RouterStore } from './RouterStore';
import { PostsStore } from 'app/stores/PostsStore';
import { AuthorsStore } from 'app/stores/AuthorsStore';
import { STORE_AUTHORS, STORE_POSTS, STORE_ROUTER } from 'app/constants';

export function createStores(history: History, defaultPosts?: any) {
  const routerStore = new RouterStore(history);
  const postsStore = new PostsStore();
  const authorsStore = new AuthorsStore();

  const addNewPost = (post: Post) => postsStore.savePost(post);
  const addNewAuthor = (author: Author) => authorsStore.saveAuthor(author);

  defaultPosts.posts.forEach(post => {
    addNewPost(post);
    addNewAuthor(post.author);
    if (post.reposts && post.reposts.length > 0) {
      post.reposts.forEach(repost => {
        addNewAuthor(repost.author);
      });
    }
  });

  return {
    [STORE_ROUTER]: routerStore,
    [STORE_POSTS]: postsStore,
    [STORE_AUTHORS]: authorsStore
  };
}
