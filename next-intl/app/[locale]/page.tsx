import ClientComponent from "@/components/ClientComponent";

import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = await getTranslations("Index");
  const p = await getTranslations("Title");

  return (
    <>
      <ClientComponent />
      <hr className="my-4" />
      <h2 className="text-2xl font-light mb-4">{p("server")}</h2>
      <p>{t("helloTitle")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: "John" })}</p>

      <hr className="my-4" />

      <p>{t("plural")}</p>
      <p>{t("cows", { count: 0 })}</p>
      <p>{t("cows", { count: 1 })}</p>
      <p>{t("cows", { count: 3 })}</p>
    </>
  );
}
