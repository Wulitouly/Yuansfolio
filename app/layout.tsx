import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://wulitouly.github.io/Yuansfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "刘渊｜Data, Product & AI",
  description: "刘渊的个人主页：有温度地理解，有逻辑地行动。",
  icons: {
    icon: "favicon.jpg",
    shortcut: "favicon.jpg",
  },
  openGraph: {
    title: "刘渊｜有温度地理解 有逻辑地行动",
    description: "从用户运营出发，走向数据与 AI。",
    type: "website",
    url: siteUrl,
    images: [{ url: "og.png", width: 1734, height: 907, alt: "刘渊个人主页" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "刘渊｜有温度地理解 有逻辑地行动",
    description: "从用户运营出发，走向数据与 AI。",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
