import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import logo from "../../assets/logo.svg";
import { RiMoonLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import { usePath } from "../../store";

export default function SideMenu() {
  const { path } = usePath();
  const [activePath, setActivePath] = useState();
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <div
      className="d-flex flex-lg-column flex-row bg-white justify-content-between align-items-center  border shadow"
      id={styles.sideMenu}
    >
      <img src={logo} className="d-none d-lg-block" />

      {path.map((el, index) => (
        <Link
          to={el.path}
          key={index}
          className={el.path == activePath ? styles.activeLink : null}
        >
          {el.icon}
        </Link>
      ))}

      <Link>
        <RiMoonLine />
      </Link>

      <Dropdown />
    </div>
  );
}
