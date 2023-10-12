import React from "react";
import { useTranslation } from "react-i18next";
const Review = ({ rate }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-20">
      <div className="flex flex-col gap-1 md:gap-3 w-full md:w-[50%] font-semibold">
        <div className="flex  justify-between">
          <p>{t("Cleanliness")}</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>{t("Communication")}</p>{" "}
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p> {t("Checkin")}</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 md:gap-3 w-full  md:w-[50%] font-semibold">
        <div className="flex justify-between">
          <p> {t("Accuracy")}</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p> {t("Location")}</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p> {t("Value")}</p>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="w-28 h-1 rounded-lg bg-gray-800"></div>
            <p>{rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
