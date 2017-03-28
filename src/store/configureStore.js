import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import createSagaMiddleweare, {END}  from 'redux-saga';
import {createLogger} from 'redux-logger';
import {loadStore,saveStore} from '../Connectivity/localStorage';
import sagas from '../sagas';

const persistedState = loadStore();
const loggerMiddleWare  = createLogger();
const sagaMiddleweare = createSagaMiddleweare();
function configureStoreProd() {
  const middlewares = [
    // Add other middleware on this line...
  sagaMiddleweare
  ];

  const store = createStore(rootReducer, persistedState, compose(
    applyMiddleware(...middlewares)
    )
  );
  store.subscribe(()=>{
    saveStore(store.getState());
  });
  sagaMiddleweare.run(sagas);
  store.close = () => store.dispatch(END);
  return store;
}

function configureStoreDev() {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),
    sagaMiddleweare,
    loggerMiddleWare

  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );
  store.subscribe(()=>{
    saveStore(store.getState());
  });
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  sagaMiddleweare.run(sagas);
  store.close = () => store.dispatch(END);
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;