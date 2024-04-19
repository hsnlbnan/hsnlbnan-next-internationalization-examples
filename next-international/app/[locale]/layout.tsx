import { ReactElement } from "react";
import { I18nProviderClient } from "../locales/client";
import { Header } from "@/app/components/Header";

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <I18nProviderClient locale={locale}>
      <Header />

      <div className="px-3 py-5">{children}</div>
    </I18nProviderClient>
  );
}
