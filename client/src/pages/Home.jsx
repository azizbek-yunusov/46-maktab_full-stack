import { useTranslation } from "react-i18next";
import { HelmetTitle } from "../utils";
import BannerCarousel from "../components/Banner";
import { getImages } from "../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomeNews } from "../components/News";
import About from "../components/About";
import Statics from "../components/Statics";
import Appeal from "../components/Appeal";
import SchoolLive from "../components/SchoolLive";
import Urls from "../components/Urls";

const Home = () => {
  let { t } = useTranslation(["home"]);
  const { images } = useSelector((state) => state.image);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!images.length) {
      dispatch(getImages());
    }
  }, [dispatch, images]);
  return (
    <main className="min-h-screen">
      <HelmetTitle title={t("home")} />
      <BannerCarousel />
      <HomeNews />
      <About />
      <Statics />
      <Appeal />
      <SchoolLive />
      <Urls />
    </main>
  );
};

export default Home;
