import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joaquin Meneses",
  description: "Portfolio build by Joaquin Meneses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
