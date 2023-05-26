import React from "react";
import Logo from "../Helpers/Logo";
import { useTranslation } from "react-i18next";
import { socials } from "../../data/socials";

const Footer = () => {
  const { t } = useTranslation(["home"]);
  return (
    <footer className="relative z-10 bg-white pt-20">
      <div className="container-full">
        <div className="-mx-4 flex justify-between">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <div className="mb-10 w-full">
              <Logo className="text-base" />
              <div className="flex items-center my-5">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    href={`${item.href}`}
                    className="rounded-md bg-purple-700 p-2 text-2xl mx-2 text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                {t("resources")}
              </h4>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    User Flow
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    User Strategy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                {t("about")}
              </h4>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    {t("about")}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Follow Us On
              </h4>

              <p className="text-body-color text-base">&copy; 2025 TailGrids</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
