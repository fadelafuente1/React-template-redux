import { createStore } from 'redux';
import rootReducer from './reducers';

export default(initalState) => {
  return createStore(rootReducer, initalState);
}
