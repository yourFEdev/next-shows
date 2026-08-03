import "./globals.css";
import ThemeProvider from "@/components/provider/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://andreka.dev"),

  title: {
    default: "Andre Eka | Frontend & Full Stack Web Developer",
    template: "%s | Andre Eka",
  },

  description:
    "Portfolio of Andre Eka, a Frontend and Full Stack Web Developer specializing in React, Next.js, Vue.js, Laravel, TypeScript, and modern web technologies.",

  keywords: [
    "Andre Eka",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Vue",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
  ],

  authors: [
    {
      name: "Andre Eka",
    },
  ],

  creator: "Andre Eka",

  publisher: "Andre Eka",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://andreka.dev",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andreka.dev",
    siteName: "Andre Eka Portfolio",

    title: "Andre Eka | Frontend & Full Stack Web Developer",

    description:
      "Portfolio showcasing projects, skills, and experience in React, Next.js, Vue.js, Laravel, and TypeScript.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andre Eka Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Andre Eka | Frontend Developer",
    description: "Portfolio showcasing modern web development projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
