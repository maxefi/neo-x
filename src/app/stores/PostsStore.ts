import Post from 'app/models/Post';
import { action, computed, observable } from 'mobx';

export class PostsStore {
  constructor() {
    this.posts = [];
    this.selectedUid = null
  }

  @observable public posts: Array<Post>;
  @observable public selectedUid: number;

  @computed
  get postsOrRepostsByAuthor() {
    if (!this.selectedUid) return this.posts

    return this.posts.filter((post) => {
      let isPostOrRepostByAuthor = false
      const hasReposts = post.reposts && post.reposts.length > 0
      const isBySelectedAuthor = (item) => {
        if (item.author) return item.author.uid === this.selectedUid
        return false
      }

      if (hasReposts) {
        post.reposts.filter(repost => {
          const isRepostByAuthor = isBySelectedAuthor(repost)

          if (isRepostByAuthor) isPostOrRepostByAuthor = isRepostByAuthor
          return isRepostByAuthor
        })
      }

      return isPostOrRepostByAuthor || isBySelectedAuthor(post)
    });
  }

  @action
  savePost = (post: Post) => {
    const index = this.posts.findIndex(p => post.id === p.id);
    if (index < 0) {
      this.posts.push(post);
    } else {
      this.posts[index] = post;
    }
  }

  @action
  setSelectedUid = (uid: number): void => {
    this.selectedUid = uid
  };
}
