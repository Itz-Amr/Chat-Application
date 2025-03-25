import { RiSearchLine } from "react-icons/ri";
import styles from "./index.module.css";
import ChatMessages from "../Component/ChatMessages";
import Swiperr from "../Component/Swiper";

export default function Chat() {
  return (
    <div className="col-12 d-flex flex-column gap-3 p-3" id={styles.chat}>
      <h4 className="m-0 fw-bold">Chats</h4>
      <div id={styles.input}>
        <RiSearchLine className={styles.searchIcon} />
        <input type="search" placeholder="Seach messages or users " />
      </div>
      <Swiperr />
      <h6 className="m-0">Recent</h6>
      <div className="d-flex flex-column gap-2" id={styles.chatContainer}>
        <ChatMessages />
        <ChatMessages isActive={true} />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
        <ChatMessages />
      </div>
    </div>
  );
}
