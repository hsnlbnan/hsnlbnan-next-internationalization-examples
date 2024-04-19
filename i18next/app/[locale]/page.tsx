import ClientComponent from "@/components/ClientComponent";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/providers/TranslationProvider";

const i18nNamespaces = ["home"];

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  console.log(JSON.stringify(resources, null, 2));

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <div>
        <ClientComponent />

        <hr className="my-4" />
        <h2 className="text-2xl font-light mb-4">
          {t("Index.server.component.example")}
        </h2>
        <p>{t("Index.hello.world")}</p>

        {/* Both are equivalent: */}
        <p>{t("Index.hello.world")}</p>

        <p>{t("Index.welcome", { name: "John" })}</p>
        <p>{t("Index.welcome", { name: <strong>John</strong> })}</p>
      </div>
    </TranslationsProvider>
  );
}
