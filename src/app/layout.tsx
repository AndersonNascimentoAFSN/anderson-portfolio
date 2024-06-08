import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header/header";
import { PageTransition } from "@/motions-effects/page-transition/page-transition";
import { StairTransition } from "@/motions-effects/stair-transition/stair-transition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Anderson Portfolio",
    default: "Anderson Portfolio",
  },
  description: "Portfolio de Anderson Nascimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
