import { appReducer } from "./reducer";

const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};

export const store = createStore(appReducer);

store.dispatch({});
