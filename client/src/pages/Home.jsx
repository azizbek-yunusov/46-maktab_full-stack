import { useTranslation } from "react-i18next";
import { HelmetTitle } from "../utils";

const Home = () => {
  let { t } = useTranslation(["home"]);
  return (
    <main>
      <HelmetTitle title={t("home")} />
      <h1 className="text-red-400">Hello world</h1>
    </main>
  );
};

export default Home;
