import { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/header/Header";
import { ptSansCaption } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Code Hero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSansCaption.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-dark-snow px-28 py-8">{children}</main>
      </body>
    </html>
  );
}
