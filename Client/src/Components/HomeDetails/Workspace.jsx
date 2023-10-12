import React from "react";
import { IoFileTrayFullOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosBusiness } from "react-icons/io";
import { useTranslation } from "react-i18next";
const Workspace = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl mb-2">
          <IoFileTrayFullOutline />
        </span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold"> {t("Dedicated")} </p>
          <p className="text-[15px] text-gray-500">{t("common")}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl mb-2">
          <IoIosBusiness />
        </span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold"> {t("Selfcheck")} </p>
          <p className="text-[15px] text-gray-500">{t("doorperson")}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl  mb-2">
          <IoLocationOutline />
        </span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold"> {t("Great")} </p>
          <p className="text-[15px] text-gray-500">{t("recentguests")}</p>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
