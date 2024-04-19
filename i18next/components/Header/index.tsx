"use client";

// import languages from "@/app/constants/languages";
// import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";
import Link from "next/link";
import React from "react";
import LanguageChanger from "../LanguageChanger";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1>
        <Link
          href="https://next-international.vercel.app/docs"
          className="text-white text-xl font-light cursor-pointer"
          target="_blank"
        >
          i18-next
        </Link>
      </h1>
      <LanguageChanger />
    </header>
  );
};
