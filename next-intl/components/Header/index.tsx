"use client";

import { locales } from "@/config";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcher";

export const Header = () => {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  console.log("Header", locales);
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1>
        <Link
          href="https://next-intl-docs.vercel.app/"
          className="text-white text-xl font-light cursor-pointer"
          target="_blank"
        >
          next-intl
        </Link>
      </h1>

      <LocaleSwitcherSelect defaultValue={locale}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </header>
  );
};
