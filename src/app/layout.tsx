'use client';

import "./globals.css";
import Header from "./components/Header";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Telegram WebApp SDK загружен");

      if (window.Telegram?.WebApp) {
        // const tg = window.Telegram.WebApp;
        // tg.expand(); // Разворачиваем WebApp на весь экран
        // tg.enableClosingConfirmation(); // Включаем подтверждение выхода
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <html lang="ru">
      <body
        className={`font-sans text-[#1e1f1f] bg-white`}
      >
        <div className=" min-w-[375px] max-w-[475px] mx-auto relative flex flex-col min-h-screen">
          <Header />
          <div className="container py-5 flex flex-col grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}