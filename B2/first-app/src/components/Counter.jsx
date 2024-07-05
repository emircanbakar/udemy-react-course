import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.productPrice);

  return (
    <div>
      <h3>counter</h3>
      <button onClick={()=> setCounter(counter + 1)}>+</button>
      <span> {counter} </span>
      <button onClick={()=> setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default Counter;
