import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post";
import ElonCard from "./ElonCard";

const HomeNews = () => {
  const { isLoading, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { t } = useTranslation(["home"]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);
  return (
    <section className="border-t-2 border-gray-100 my-8">
      <div className="container-full grid grid-cols-12 gap-x-5 py-5">
        <div className="col-span-8">
          <h1 className="text-3xl font-semibold text-blue-900">{t("news")}</h1>
          <div className="grid grid-cols-3 xl:gap-4 gap-1 my-8">
            {posts.length
              ? posts.map((item, index) => <BlogCard key={index} {...item} />)
              : null}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-white mt-10 bg-cyan-500 hover:bg-cyan-600 uppercase focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-16 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {t("all-views")}
            </button>
          </div>
        </div>
        <div className="col-span-4 bg-white shadow-sm rounded-xl px-4">
          <h1 className="text-3xl text-center font-semibold text-blue-900 pt-4">
            {t("announcement")}
          </h1>
          <div className="flex_col my-5">
            {posts.length
              ? posts.slice(0, 5).map((item, index) => <ElonCard key={index} {...item} />)
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
