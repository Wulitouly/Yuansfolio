import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "刘渊｜运营分析与数据运营",
    description: "刘渊的个人主页：用文科生的温度共情世界，持理科生的清醒解构问题。",
    icons: {
      icon: "/favicon.jpg",
      shortcut: "/favicon.jpg",
    },
    openGraph: {
      title: "刘渊｜有温度地理解 有逻辑地行动",
      description: "运营分析、数据运营与业务分析个人主页",
      type: "website",
      images: [{ url: new URL("/og.png", origin).toString(), width: 1734, height: 907, alt: "刘渊个人主页" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "刘渊｜有温度地理解 有逻辑地行动",
      description: "运营分析、数据运营与业务分析个人主页",
      images: [new URL("/og.png", origin).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
