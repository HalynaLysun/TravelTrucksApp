import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <a href="/">TravelTruck</a>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
      </nav>
      <hr className={css.line} />
    </div>
  );
}
