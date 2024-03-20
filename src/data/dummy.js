// dummy.js
import { FaHouse, } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        url: 'dashboard',
        name: 'dashboard',
        icon: <FaHouse />,
      },
      {
        url: 'dashboard/account-settings',
        name: 'account-settings',
        icon: <RiUserSettingsFill />,
      },
    ],
  },
];
