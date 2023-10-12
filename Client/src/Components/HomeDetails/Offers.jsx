import React from "react";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full ">
      <div className="mt-5 text-xl font-semibold text-left">
        <h1> {t("offers")}</h1>
      </div>

      <div className="flex items-center gap-44 mt-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <img src="/images/slider/s1.jpg" alt="" className="h-[27px]" />
            <p>{t("GardenView")}</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s2.jpg" alt="" className="h-[27px]" />
            <p>{t("Waterfront")}</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s3.jpg" alt="" className="h-[27px]" />
            <p>{t("Dedicated")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s4.jpg" alt="" className="h-[27px]" />
            <p>Private{t("Dedicated")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s5.jpg" alt="" className="h-[27px]" />
            <p> {t("Temple")} </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <img src="/images/slider/s6.jpg" alt="" className="h-[27px]" />
            <p> {t("Night")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s7.jpg" alt="" className="h-[27px]" />
            <p> {t("Outdoor")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s8.jpg" alt="" className="h-[27px]" />
            <p> {t("Flexiblet")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s9.jpg" alt="" className="h-[27px]" />
            <p>{t("GardenView")} </p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s10.jpg" alt="" className="h-[27px]" />
            <p> {t("breakfast")} </p>
          </div>
        </div>
      </div>

      <div className="mt-9 mr-2 hover:bg-gray-100  w-[280px] px-4 py-3 rounded-lg text-center cursor-pointer border border-gray-800">
        <p className="font-semibold"> {t("amienities")} </p>
      </div>
    </div>
  );
};

export default Offers;
