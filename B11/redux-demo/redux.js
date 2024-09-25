const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 3,
  };
};

const store = redux.createStore(counterReducer);

console.log(store.getState())