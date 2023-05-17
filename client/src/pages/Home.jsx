import { useTranslation } from "react-i18next";
import { HelmetTitle } from "../utils";
import BannerCarousel from "../components/Banner";
import { getImages } from "../redux/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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
    </main>
  );
};

export default Home;
