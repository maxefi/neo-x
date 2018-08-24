import * as React from 'react';
import * as style from './style.css';
import Item from 'app/components/Item';
import { ItemActions } from 'app/components/Item/Item';

export interface ListProps extends ItemActions {
  items: any,
  selectedUid?: number
}

export interface ListState {}

export class List extends React.Component<ListProps, ListState> {
  constructor(props?: ListProps, context?: any) {
    super(props, context);
  }

  render() {
    const { items, selectedUid, setSelectedUid } = this.props;
    return (
      <section className={style.main}>
        <ul className={style.normal}>
          {items.map(item => {
            const key = Object.keys(item)[1];
            return (
              <Item
                key={`${key}-${item.id || item.uid}`}
                selectedUid={selectedUid}
                item={item}
                setSelectedUid={setSelectedUid}/>
            )
          })}
        </ul>
      </section>
    );
  }
}

export default List;
