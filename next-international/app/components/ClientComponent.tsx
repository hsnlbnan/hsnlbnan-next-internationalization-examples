"use client";
import { useI18n, useScopedI18n } from "../locales/client";

const ClientComponent = () => {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");

  return (
    <div>
      <h2 className="text-2xl font-light mb-4">
        {t("client.component.example")}
      </h2>
      <p>{t("hello")}</p>
      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>
      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>

      <hr className="my-4" />
      <h2 className="text-2xl font-light mb-4">{t("plural")}</h2>
      <p>{t("cows", { count: 0 })}</p>
      <p>{t("cows", { count: 1 })}</p>
      <p>{t("cows", { count: 3 })}</p>
    </div>
  );
};

export default ClientComponent;
