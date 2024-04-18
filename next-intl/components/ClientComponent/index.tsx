"use client";

import { useTranslations } from "next-intl";

const ClientComponent = () => {
  const t = useTranslations("Index");
  const p = useTranslations("Title");

  return (
    <div>
      <p className="text-2xl font-light mb-4">{p("client")}</p>
      <p>{t("helloTitle")}</p>
      <p>{t("hello.world")}</p>
      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: "John" })}</p>

      <hr className="my-4" />
      <h2 className="text-2xl font-light mb-4">{t("plural")}</h2>
      <p>{t("cows", { count: 0 })}</p>
      <p>{t("cows", { count: 1 })}</p>
      <p>{t("cows", { count: 3 })}</p>
    </div>
  );
};

export default ClientComponent;
