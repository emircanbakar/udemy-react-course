import { NavLink } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="products"
              end
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
