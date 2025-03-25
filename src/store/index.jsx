import {
  RiContactsLine,
  RiGroupLine,
  RiMessage3Line,
  RiSettings2Line,
  RiUser2Line,
} from "react-icons/ri";
import { create } from "zustand";
import Chat from "../Pages/Chats/Layout";

export const usePath = create((set) => ({
  path: [
    { path: "/profile", icon: <RiUser2Line />, element: <h1>Profiel</h1> },
    { path: "/chats", icon: <RiMessage3Line />, element: <Chat /> },
    { path: "/groups", icon: <RiGroupLine />, element: <h1>Groups</h1> },
    { path: "/contacts", icon: <RiContactsLine />, element: <h1>Contacts</h1> },
    {
      path: "/settings",
      icon: <RiSettings2Line />,
      element: <h1>Settings</h1>,
    },
  ],
}));
