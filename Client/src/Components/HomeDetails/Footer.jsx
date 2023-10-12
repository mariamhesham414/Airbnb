import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full md:px-10 border border-gray-200 bg-[#f7f7f7] grid grid-cols-1 md:grid-cols-3 gap-10 md-gap-2 py-8 text-sm">
      <div className=" flex justify-evenly  ">
        <div className="text-left">
          <h1 className="font-semibold text-left">{t("Support")}</h1>
          <div className="flex flex-col gap-2 md:mt-5 text-left">
            <p>{t("help")}</p>
            <p>{t("AirCover")}</p>
            <p>{t("disabilities")}</p>
            <p>{t("Cancellation")}</p>
            <p>{t("COVID_19")} </p>
            <p>{t("Report")}</p>
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">{t("Hosting")}</h1>
          <div className="flex flex-col gap-2 md:mt-5 text-left">
            <p>{t("airband")} </p>
            <p>{t("AirCoverhost")} </p>
            <p>{t("Disability")}</p>
            <p>{t("resources")}</p>
            <p>{t("Visit")} </p>
            <p>{t("Howhost")} </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">Airbnb</h1>
          <div className="flex flex-col gap-2 md:mt-5 text-left">
            <p>{t("help")}</p>
            <p>AirCover</p>
            <p>{t("Disability")}</p>
            <p>{t("Cancellation")} </p>
            <p>{t("COVID_19")}</p>
            <p>{t("neighbourhood")} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
