import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

export const menu = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about-me",
    path: "/about",
  },
  {
    name: "students",
    path: "/about",
  },
  {
    name: "news",
    path: "/news",
  },
  {
    name: "documents",
    path: "/documents",
  },
  {
    name: "ramz",
    path: "/ramz",
  },
  {
    name: "address",
    path: "/contact",
  },
];

export const checks = [
  {
    name: "sifatli-talim",
    color: "bg-blue-500",
  },
  {
    name: "onlayn-resurslar",
    color: "bg-violet-500",
  },
  {
    name: "tajribali-uqtuvchilar",
    color: "bg-orange-500",
  },
  {
    name: "amaliy-kunikmalar",
    color: "bg-cyan-500",
  },
];

export const statics = [
  {
    name: "students",
    value: "1200",
    color: "text-blue-500",
  },
  {
    name: "teachers",
    value: "65",
    color: "text-orange-500",
  },
  {
    name: "talim-resurslari",
    value: "116+",
    color: "text-violet-500",
  },
  {
    name: "talim-sifati",
    value: "99%",
    color: "text-cyan-500",
  },
];

export const urls = [
  {
    img: "https://qitu.uz/storage/partners/March2023/bnlTTN2sJbELdL22dgiM.png",
    href: "https://www.gov.uz",
  },
  {
    img: "https://qitu.uz/storage/partners/March2023/prGsbbgrsFqA2qZfiFJ3.png",
    href: "https://www.gov.uz",
  },
  {
    img: "https://qitu.uz/storage/partners/March2023/Xwk8vEtqMmJhUgts5CMR.png",
    href: "https://www.gov.uz",
  },
  {
    img: "https://qitu.uz/storage/partners/March2023/bnlTTN2sJbELdL22dgiM.png",
    href: "https://www.gov.uz",
  },
];

export const contacts = [
  {
    title: "telefon",
    text: "+998 (94) 554 55 94",
    href: "+998945545594",
    icon: <BsTelephone className="text-3xl text-violet-600" />
  },
  {
    title: "Email",
    text: "46maktab@gmail.com",
    href: "46maktab@gmail.com",
    icon: <BsEnvelope className="text-3xl text-violet-600" />

  },
  {
    title: "manzil",
    text: "Bagdod tum., Yoshlik k., 72/12 uy",
    href: "/",
    icon: <HiOutlineHome className="text-[34px] text-violet-600" />

  },
];