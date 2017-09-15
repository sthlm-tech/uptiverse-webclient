import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers';
import thunk from 'redux-thunk';

let store = null;

function configureStore(state){
  var initalState = state || {};
  const middleware = [
    thunk
  ];

  let devToolsExtension = f => f;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  }

  var enhancer = compose(
    applyMiddleware(...middleware),
    devToolsExtension,
  );

  store = createStore(reducers, initalState, enhancer);
  return store;
}


export default configureStore;
export { store };
