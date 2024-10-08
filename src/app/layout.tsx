import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider} from "next-themes";
import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import "./globals.css";

const font = Rubik({subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"]});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Hendra Application",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
