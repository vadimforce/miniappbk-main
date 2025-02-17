import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Челобрики",
  description: "Челобрики",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`font-sans text-[#1e1f1f] `}
      >
        <Header />
        <div className="container py-5">
          {children}
        </div>
      </body>
    </html>
  );
}