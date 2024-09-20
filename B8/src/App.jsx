import Button from "./components/UI/Button.";
import MyElement from "./components/MyElement";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [toggleP, setToggleP] = useState(false);
  const [toggleAllow, setToggleAllow] = useState(false);
  const togglePHandler = useCallback(() => {
    if (toggleAllow) {
      setToggleP((prevState) => !prevState);
    }
  }, [toggleAllow]);

  const toggleAllowHandler = useCallback(() => {
    setToggleAllow(true);
  }, []);

  return (
    <div className="container">
      <h1>Hello</h1>
      <MyElement show={toggleP} />
      <br />
      <br />
      <Button onClick={toggleAllowHandler}>Toggle Allow</Button>
      <br />
      <br />
      {/* <b> {toggleP ? "true" : "false"} </b> */}
      <Button onClick={togglePHandler}>Toggle P</Button>
    </div>
  );
}

export default App;
