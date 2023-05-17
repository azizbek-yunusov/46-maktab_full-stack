import {
  AiOutlineInbox,
  AiOutlineComment,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";
import { BsCardImage, BsCart2, BsUiChecksGrid } from "react-icons/bs";
import {
  BiBook,
  BiBuildingHouse,
  BiCategory,
  BiHomeAlt,
  BiNews,
} from "react-icons/bi";
import { MdWork } from "react-icons/md";

// Admin Sidebar Profile data
export const sidebarProAdmin = [
  {
    id: 2,
    path: "/dashboard/cabinet",
    name: "overview",
    icon: <BiHomeAlt className="md:text-xl text-xl" />,
  },
  {
    id: 3,
    path: "/cabinet/projects",
    name: "projects",
    icon: <BsUiChecksGrid className="md:text-xl text-xl" />,
  },
  {
    id: 4,
    path: "/cabinet/team",
    name: "team",
    icon: <AiOutlineTeam className="md:text-xl text-xl" />,
  },
  {
    id: 1,
    path: "/cabinet/settings",
    name: "settings",
    icon: <AiOutlineSetting className="md:text-xl text-xl" />,
  },
];

// Admin Sidebar data
export const sidebarAdmin = [
  {
    id: 1,
    path: "/dashboard",
    name: "overview",
    icon: <AiOutlineBarChart className="md:text-lg ml-4" />,
  },
  {
    id: 2,
    path: "/dashboard/employees",
    name: "employee",
    icon: <MdWork className="md:text-lg ml-4" />,
  },
  {
    id: 1,
    path: "/dashboard/students",
    name: "students",
    icon: <AiOutlineUser className="md:text-lg ml-4" />,
  },
  {
    id: 5,
    path: "/dashboard/sciences",
    name: "sciences",
    icon: <BiBook className="md:text-lg ml-4" />,
  },
  {
    id: 3,
    path: "/dashboard/images",
    name: "images",
    icon: <BsCardImage className="md:text-lg ml-4" />,
  },

  {
    id: 1,
    path: "/dashboard/posts",
    name: "posts",
    icon: <BiNews className="md:text-lg ml-4" />,
  },
];
