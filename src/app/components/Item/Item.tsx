import * as React from 'react';
import * as style from './style.css';
import List from 'app/components/List/List';

export interface ItemActions {
  setSelectedUid?: (uid: number) => void
}

export interface ItemProps extends ItemActions {
  item: any,
  selectedUid: number
}

export interface ItemState {}

export class Item extends React.Component<ItemProps, ItemState> {
  constructor(props?: ItemProps, context?: any) {
    super(props, context);
  }

  private getReposts = (item) => {
    const { selectedUid, setSelectedUid } = this.props;
    return <List items={item.reposts} selectedUid={selectedUid} setSelectedUid={setSelectedUid}/>;
  };

  private handleToggleAuthorCheckbox = (e: React.SyntheticEvent<any>) => {
    const { item, setSelectedUid } = this.props;
    return setSelectedUid(item.uid);
  };

  private getItem = (item) => {
    const { selectedUid } = this.props;
    const isPost = !!item.id;
    const isAuthor = !!item.uid;
    const hasReposts = item.reposts && item.reposts.length > 0;
    const isAnyOfRepostsByAuthor =
      selectedUid === null ||
      (hasReposts && item.reposts.some(repost => repost.author.uid === selectedUid));
    if (isPost) {
      return (
        <label className={hasReposts && isAnyOfRepostsByAuthor ? style.repost : style.post}>
          <div>
            <span>by: {item.author.name}</span>
            <span>likes: {item.likes}</span>
            {hasReposts && isAnyOfRepostsByAuthor && <span>reposts: </span>}
          </div>
          {hasReposts && isAnyOfRepostsByAuthor && this.getReposts(item)}
        </label>
      );
    }
    if (isAuthor) {
      return (
        <div className={style.author}>
          <label>{item.name}</label>
          <input
            className={style.toggle}
            type='checkbox'
            checked={item.uid === selectedUid}
            onChange={this.handleToggleAuthorCheckbox}/>
        </div>
      );
    }
  };

  render() {
    const { item, selectedUid } = this.props;
    const isRepost = !!item.id && !item.reposts;
    if (isRepost) {
      if (selectedUid === null || item.author.uid === selectedUid) {
        return (
          <li className={style.normal}>
            <div className={style.view}>
              <input
                className={style.toggle}
                type='text'
                disabled={true}
                value={item.id || item.uid}
              />
              <label>
                <div>
                  <span>by: {item.author.name}</span>
                  <span>likes: {item.likes}</span>
                </div>
              </label>
            </div>
          </li>
        );
      }
      return null;
    }
    return (
      <li className={style.normal}>
        <div className={style.view}>
          <input
            className={style.toggle}
            type='text'
            disabled={true}
            value={item.id || item.uid}
          />
          {this.getItem(item)}
        </div>
      </li>
    );
  }
}
