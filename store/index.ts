import { AnyAction, combineReducers, Store } from 'redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import homeReducer from './home';

import { HomeState } from 'types/home';

export type RootState = ReturnType<typeof rootReducer>;

export interface State {
  home?: HomeState;
}

const DEFAULT_STATE: State = {};

let store: any = null;
let devtools = (func: any) => func;

const rootReducer = combineReducers({
  home: homeReducer,
});

if (process.browser && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

export function getStore() {
  return store;
}

export type AppStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>;
};
export default function getOrInitializeStore(initialState = DEFAULT_STATE): AppStore {
  if (!store || typeof window === 'undefined') {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), devtools));
  }

  return store;
}
