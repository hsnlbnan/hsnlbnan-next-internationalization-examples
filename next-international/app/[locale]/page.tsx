import ClientComponent from "../components/ClientComponent";
import { getI18n, getScopedI18n } from "../locales/server";

export default async function Page() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("hello");

  return (
    <div>
      <ClientComponent />

      <hr className="my-4" />
      <h2 className="text-2xl font-light mb-4">
        {t("server.component.example")}
      </h2>
      <p>{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  );
}
