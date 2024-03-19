// dummy.js
import { FaHouse, FaUserPlus } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FaHouse />,
      },
    ],
  },
  {
    title: 'Account Settings',
    links: [
      {
        name: 'account-settings',
        icon: <RiUserSettingsFill />,
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'login',
        icon: <LuLogIn />,
      },
      {
        name: 'register',
        icon: <FaUserPlus />,
      },
    ],
  },
];
