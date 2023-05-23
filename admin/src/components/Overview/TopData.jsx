import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BsEnvelopeFill, BsFolder } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { IoMdBookmarks } from "react-icons/io";
import { MdOutlineAttachMoney, MdWork } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TopData = () => {
  let { t } = useTranslation(["home"]);
  return (
    <div className="w-full xl:px-5 grid grid-cols-4 xl:gap-4 gap-2 md:my-4">
      <div className="flex justify-start items-center px-3 xl:px-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2e2d4a] ">
        <div className="bg-orange-100 dark:bg-orange-300 p-3 xl:p-4 rounded-lg shadow-md shadow-orange-400/50">
          <MdWork className="text-orange-600 dark:text-orange-600 text-3xl" />
        </div>
        <div className="ml-2 xl:ml-4">
          <p className="text-xs font-semibold xl:text-sm text-gray-500 dark:text-gray-200">
            {t("employees")}
          </p>
          <p className="text-xl xl:text-2xl font-semibold font-mono mr-2 text-gray-700 dark:text-gray-200">
            {/* {orders.length}  */} 5455
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center px-3 xl:px-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2e2d4a] ">
        <div className="bg-violet-100 dark:bg-violet-300 p-3 xl:p-4 rounded-lg shadow-md shadow-violet-400/50">
          <HiUserGroup className="text-violet-600 dark:text-violet-600 text-3xl" />
        </div>
        <div className="ml-2 xl:ml-4">
          <p className="text-xs font-semibold xl:text-sm text-gray-500 dark:text-gray-200">
            {t("students")}
          </p>
          <p className="text-xl xl:text-2xl font-semibold font-mono mr-2 text-gray-700 dark:text-gray-200">
            {/* {users.length} */} 1000
          </p>
        </div>
      </div>

      <div className="flex justify-start items-center px-3 xl:px-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#2e2d4a] ">
        <div className="bg-yellow-100 dark:yellow-pink-300 p-3 xl:p-4 rounded-lg shadow-md shadow-yellow-400/50">
          <BsEnvelopeFill className="text-yellow-500 dark:yellow-pink-600 text-3xl" />
        </div>
        <div className="ml-2 xl:ml-4">
          <p className="text-xs font-semibold xl:text-sm text-gray-500 dark:text-gray-200">
            {t("appeals")}
          </p>
          <p className="text-xl xl:text-2xl font-semibold font-mono mr-2 text-gray-700 dark:text-gray-200">
            105
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center bg-white dark:bg-[#2e2d4a] border border-gray-200 dark:border-gray-700  xl:px-6 px-3 xl:py-5 py-3 rounded-lg">
        <div className="bg-blue-100 dark:bg-blue-300 p-3 xl:p-4 rounded-lg shadow-md shadow-blue-400/50">
          <IoMdBookmarks className="text-blue-500 dark:text-blue-600 text-3xl" />
        </div>
        <div className="ml-2 xl:ml-4">
          <p className="text-xs font-semibold xl:text-sm text-gray-500 dark:text-gray-200">
            {t("sciences")}
          </p>
          <p className="text-xl xl:text-2xl font-semibold font-mono mr-2 text-gray-700 dark:text-gray-200 ">
            {/* {products.length} */} 155
            {/* <CountUp d.01} end={products.length} /> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopData;
