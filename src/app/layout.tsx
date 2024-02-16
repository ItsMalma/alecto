import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./style.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./_theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alecto",
  description: "Alecto Official Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
