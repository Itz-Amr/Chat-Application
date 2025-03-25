import styles from "./index.module.css";
import user from "../../../../assets/user.jpg";

export default function ChatMessages({ isActive }) {
  return (
    <div
      className={`${styles.ChatMessages} + ${isActive ? styles.active : null}`}
    >
      <div className="d-flex align-items-center gap-2" id={styles.msg}>
        <div className="position-relative">
          <span className={styles.userStatus}></span>
          <img src={user} alt="" />
        </div>

        <div className="d-flex flex-column">
          <h6 className="m-0">User Name</h6>
          <p className="m-0">The last Message...</p>
        </div>
      </div>

      <div className="d-flex flex-column">
        <p className="m-0" id={styles.uniq}>
          5 min
        </p>
        <span className={styles.userMsgs}>0</span>
      </div>
    </div>
  );
}
