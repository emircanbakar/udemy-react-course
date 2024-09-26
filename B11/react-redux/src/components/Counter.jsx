import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseHandler}>Increase 5</button>
      <button onClick={decrementHandler}>Decrease</button>
      <button onClick={toggleHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
