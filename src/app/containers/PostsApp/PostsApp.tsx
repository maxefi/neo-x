import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { STORE_AUTHORS, STORE_POSTS, STORE_ROUTER } from 'app/constants';
import Header from 'app/components/Header';
import { AuthorsStore, PostsStore } from 'app/stores';
import List from 'app/components/List';

export interface PostsAppProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: routerStore;
  // [STORE_POSTS]: postsStore;
  // [STORE_AUTHOR]: authorsStore;
}

export interface PostsAppState {}

@inject(STORE_ROUTER, STORE_POSTS, STORE_AUTHORS)
@observer
export class PostsApp extends React.Component<PostsAppProps, PostsAppState> {
  constructor(props: PostsAppProps, context: any) {
    super(props, context);
  }

  render() {
    const postsStore = this.props[STORE_POSTS] as PostsStore;
    const authorsStore = this.props[STORE_AUTHORS] as AuthorsStore;

    return (
      <div className={style.grid}>
        <div className={style.normal}>
          <Header title='Posts'/>
          <List selectedUid={postsStore.selectedUid} items={postsStore.postsOrRepostsByAuthor}/>
        </div>
        <div className={`${style.normal} ${style.filter}`}>
          <Header title='Authors'/>
          <List
            selectedUid={postsStore.selectedUid}
            items={authorsStore.authors}
            setSelectedUid={postsStore.setSelectedUid}/>
        </div>
      </div>
    );
  }
}

export default PostsApp;
