import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Hendra Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
