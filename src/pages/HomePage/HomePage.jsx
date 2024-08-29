import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <NavLink to={"/catalog"}>View Now</NavLink>
    </div>
  );
}
