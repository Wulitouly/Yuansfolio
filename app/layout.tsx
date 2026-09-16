import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "刘渊｜Data, Product & AI",
    description: "刘渊的个人主页：有温度地理解，有逻辑地行动。",
    icons: {
      icon: "/favicon.jpg",
      shortcut: "/favicon.jpg",
    },
    openGraph: {
      title: "刘渊｜有温度地理解 有逻辑地行动",
      description: "从用户运营出发，走向数据与 AI。",
      type: "website",
      images: [{ url: new URL("/og.png", origin).toString(), width: 1734, height: 907, alt: "刘渊个人主页" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "刘渊｜有温度地理解 有逻辑地行动",
      description: "从用户运营出发，走向数据与 AI。",
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
