"use client";

import languages from "@/app/constants/languages";
import { useChangeLocale, useCurrentLocale } from "@/app/locales/client";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const changeLocale = useChangeLocale();
  const initialLocale = useCurrentLocale();

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <h1>
        <Link
          href="https://next-international.vercel.app/docs"
          className="text-white text-xl font-light cursor-pointer"
          target="_blank"
        >
          next-international
        </Link>
      </h1>

      <select
        className="bg-gray-900 text-white p-2 rounded"
        value={initialLocale}
        onChange={(e) =>
          changeLocale(e.target.value as (typeof languages)[number]["code"])
        }
      >
        {languages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </header>
  );
};
