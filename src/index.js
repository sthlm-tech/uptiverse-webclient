import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'universal-router';
import history from './core/history';
import './index.css';
import configureStore from "./store";
import routes from './routes';

const store = configureStore();

const router = new Router(routes);
const context = {
  store: store,
  history: history,
};

let currentLocation = history.location;
let container = document.getElementById('root');
store.subscribe(() => handleStateChange(store));

function handleStateChange(store){
  context.store = store
}

history.listen(onLocationChange);
onLocationChange(currentLocation);

function onLocationChange(location) {
  router.resolve({ path: location.pathname,  ...context })
  .then(route => {
    ReactDOM.render(
      <Provider store={store}>
        { route.component }
      </Provider>,
      container
    );
  });
}

//Re-add this when https is working.
//import registerServiceWorker from './registerServiceWorker';
//registerServiceWorker();
