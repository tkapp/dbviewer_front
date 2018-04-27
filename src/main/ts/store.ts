import * as Redux from 'redux';
import { contextsReducer } from './modules/Contexts';

const store = Redux.createStore(
  Redux.combineReducers({
    contextsReducer,
  }),
);

export default store;
