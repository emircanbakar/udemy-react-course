/* eslint-disable react/prop-types */
import React from "react";
const Button = (props) => {
  console.log("toggle çalıştı");
  return <button onClick={props.onClick}>{props.children}</button>;
};

const MemoizedButton = React.memo(Button);

export default MemoizedButton;
