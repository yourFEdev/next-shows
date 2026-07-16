import "./globals.css";
import ThemeProvider from "@/components/provider/ThemeProvider";

export const metadata = {
  title: "Pradx.",
  description: "Frontend Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
                bg-white
                text-slate-900
                dark:bg-slate-950
                dark:text-white
                transition-colors
                duration-300
                "
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
