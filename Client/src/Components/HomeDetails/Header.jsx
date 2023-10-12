import React from "react";
import { useTranslation } from "react-i18next";

const Header = ({ house }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex justify-between items-center">
      <div className="text-left">
        <p className="text-3xl font-semibold text-[#20262E]">{t("Admin")}</p>
        <p className=" text-[17px] text-gray-700">
          {house.guestNumber} {t("guests")} . {house.numberOfRooms}{" "}
          {t("bedrooms")}.{house.numberOfBedrooms} {t("2bathrooms")}
        </p>
      </div>
      <div className="ml-20">
        <img
          src="/images/memes.jpeg"
          alt=""
          className="h-14 w-14 rounded-full object-cover ml-10"
        />
      </div>
    </div>
  );
};

export default Header;
