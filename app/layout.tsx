import { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans, Overpass_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/_components/header";
import { cn } from "@/lib/utils";
import Footer from "@/app/_components/footer";
import Providers from "@/app/_components/providers";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-overpass-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ivan Avdeyev | Frontend Developer",
  description: "Ivan Avdeyev | Frontend Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(openSans.variable, overpassMono.variable)}
      suppressHydrationWarning
    >
      <body className="grid min-h-[100dvh] grid-rows-body pt-[60px]">
        <Providers>
          <Header />
          <main className="h-full">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
