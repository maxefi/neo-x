import { observable } from 'mobx';
import Author from 'app/models/Author';

export class AuthorsStore {
  constructor() {
    this.authors = [];
  }

  @observable public authors: Array<Author>;

  saveAuthor(author: Author) {
    const index = this.authors.findIndex(a => author.uid === a.uid);
    if (index < 0) {
      this.authors.push(author);
    } else {
      this.authors[index] = author;
    }
  }
}
