import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1 = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2 = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number One
          </label>
          <input
            type="number"
            className="form-input"
            id="number1"
            value={number1}
            onChange={handleNumber1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number Two
          </label>
          <input
            type="number"
            className="form-input"
            id="number2"
            value={number2}
            onChange={handleNumber2}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>Add</button>
        <div className="form-group">
          <label className="form-label" htmlFor="number3">
            Result
          </label>
          <input
            type="number"
            className="form-input"
            id="number3"
            value={result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
