import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manage Course & Blog",
  description:
    "The platform provides an admin panel for creating and managing Courses and Blogs, with support for media uploads (via presigned URLs), draft/publish states, and tagging. All content is accessible through a REST API with search, filtering, and pagination, and external integrations are supported via API Keys or JWT. The architecture is built for scalability (CDN for files, cursor pagination, caching with Redis), and future updates will add bot creation tools and webhook/automation features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="bottom-left" duration={5000} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
