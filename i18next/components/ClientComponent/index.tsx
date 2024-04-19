"use client";

import { useTranslation } from "react-i18next";

const ClientComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-2xl font-light mb-4">{t("Index.test")}</h2>
      <p>{t("Index.hello.world")}</p>
      <p>{t("Index.welcome", { name: "John" })}</p>

      <hr className="my-4" />
      <h2 className="text-2xl font-light mb-4">{t("Index.plural")}</h2>
      <p>{t("Index.cows", { count: 0, format: "intl" })}</p>
      <p>{t("Index.cows", { count: 1, format: "intl" })}</p>
      <p>{t("Index.cows", { count: 2, format: "intl" })}</p>
    </div>
  );
};

export default ClientComponent;
