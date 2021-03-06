import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { createStores } from 'app/stores';
import { App } from 'app';
import posts from './assets/data';

// enable MobX strict mode
useStrict(true);

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, posts);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
