import {
  AiOutlineInbox,
  AiOutlineComment,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";
import { BsCardImage, BsCart2, BsUiChecksGrid } from "react-icons/bs";
import { BiBuildingHouse, BiCategory, BiHomeAlt, BiNews } from "react-icons/bi";

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
    path: "/dashboard/products",
    name: "products",
    icon: <AiOutlineInbox className="md:text-lg ml-4" />,
  },
  {
    id: 1,
    path: "/dashboard/orders",
    name: "orders",
    icon: <BsCart2 className="md:text-lg ml-4" />,
  },
  {
    id: 1,
    path: "/dashboard/users",
    name: "users",
    icon: <AiOutlineUser className="md:text-lg ml-4" />,
  },
  {
    id: 54,
    path: "/dashboard/reviews",
    name: "reviews",
    icon: <AiOutlineComment className="md:text-lg ml-4" />,
  },
  {
    id: 3,
    path: "/dashboard/banners",
    name: "banners",
    icon: <BsCardImage className="md:text-lg ml-4" />,
  },
  {
    id: 4,
    path: "/dashboard/categories",
    name: "categories",
    icon: <BiCategory className="md:text-lg ml-4" />,
  },
  // {
  //   id: 5,
  //   path: "/categories/category/items",
  //   name: "category-item",
  //   icon: <BiCategory className="md:text-lg ml-4" />,
  // },
  // {
  //   id: 8,
  //   path: "/category/item/create",
  //   name: "category-item-create",
  //   icon: <BiCategory className="md:text-lg ml-4" />,
  // },
  {
    id: 6,
    path: "/dashboard/brands",
    name: "brands",
    icon: <BiBuildingHouse className="md:text-lg ml-4" />,
  },

  {
    id: 1,
    path: "/dashboard/posts",
    name: "posts",
    icon: <BiNews className="md:text-lg ml-4" />,
  },
];
