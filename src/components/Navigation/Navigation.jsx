import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <ul className={s.list}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
