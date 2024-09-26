import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Counter />
      <Header />
      {!isAuth && <UserForm />}
      {isAuth &&  <h2>User profile component here!</h2> }
    </>
  );
}

export default App;
