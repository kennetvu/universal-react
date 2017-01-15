import { createStore } from 'redux';
import counter from './counter';

const configureStore = preloadStore => {
  const store = createStore(
    counter,
    preloadStore
  );

  return store;
}

export default configureStore;