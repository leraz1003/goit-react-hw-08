import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.nav}>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
