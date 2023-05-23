import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SmallCard from "./SmallCard";

const SideBar = () => {
  let { t } = useTranslation(["home"]);
  const { isLoading, posts } = useSelector((state) => state.post);


  return (
    <div className="bg-white p-4">
      <div className="">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {t("search")}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-5 pl-14 text-lg text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t("search")}
            required
          />
        </div>
        <div className="flex_col mt-7 border-2 border-zinc-200/40 rounded-lg p-4">
          <h1 className="text-2xl text-violet-900 font-semibold">{t("popular-post")}</h1>
          <div className="flex_col my-5">
            {posts.length
              ? posts.map((item, index) => <SmallCard key={index} {...item} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
