import { useReducer } from "react";
import "./Calculator.css";
import { reducer, initialState } from "../reducer/reducerCalculator";


const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const handleNumber1 = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };

  const handleNumber2 = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };

  const handleAddition = () => {
    dispatch({ type: "RESULT", payload: state.number1 + state.number2 });
  };

  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number One
          </label>
          <input
            type="number"
            className="form-input"
            onChange={handleNumber1}
            id="number1"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number Two
          </label>
          <input
            type="number"
            onChange={handleNumber2}
            className="form-input"
            id="number2"
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="number3">
            Result
          </label>
          <input type="number" className="form-input" id="number3" readOnly value={state.result}/>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
