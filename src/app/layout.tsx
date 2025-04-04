import type { Metadata } from "next";
import "./globals.css";
import type { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Character Creator",
  description: "Something like this",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
