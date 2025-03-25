import styles from "./index.module.css";
import { Outlet } from "react-router-dom";
import SideMenu from "../Components/SideMenu";

export default function MainLayout() {
  return (
    <div className="col-12 h-100 bg-danger d-flex flex-column flex-lg-row">
      <SideMenu />

      <div className="px-3" id={styles.outlet}>
        <Outlet />
      </div>
      <h1 className="d-none bg-success d-lg-block flex-grow-1 h-100">
        Messages
      </h1>
    </div>
  );
}
