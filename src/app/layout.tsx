import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetbrainsMono =
  JetBrains_Mono(
    {
      subsets:
        [
          "latin",
        ],
      weight:
        [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
        ],
      variable:
        "--font-jetbrainsMono",
    }
  );

export const metadata: Metadata =
  {
    title:
      "Saumay Portfolio",
    description:
      "Saumay's Portfolio Website",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          JetbrainsMono.variable
        }
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {
            children
          }
        </PageTransition>
      </body>
    </html>
  );
}
