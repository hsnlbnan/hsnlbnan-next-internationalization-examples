import { Header } from "@/components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="px-3 py-5">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
