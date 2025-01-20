import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexus | NexzGen's Internal Operations Platform",
    template: "%s | Nexus by NexzGen"
  },
  description: "NexzGen's central platform for managing operations, ventures, and strategic planning. Access your company's resources, analytics, and tools in one place.",
  keywords: [
    "NexzGen",
    "Operations Management",
    "Venture Management",
    "Analytics Dashboard",
    "Enterprise Platform",
    "Business Operations",
    "Project Management",
    "Team Collaboration"
  ],
  authors: [{ name: "NexzGen Studio" }],
  creator: "NexzGen Studio",
  publisher: "NexzGen Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexus.nexzgen.com",
    title: "Nexus | NexzGen's Internal Operations Platform",
    description: "Your centralized command center for NexzGen's operations, ventures, and innovations.",
    siteName: "Nexus by NexzGen",
    images: [{
      url: "https://nexus.nexzgen.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Nexus Platform Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus | NexzGen's Internal Operations Platform",
    description: "Your centralized command center for NexzGen's operations, ventures, and innovations.",
    creator: "@nexzgenstudio",
    images: ["https://nexus.nexzgen.com/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  applicationName: "Nexus",
  category: "Business",
  classification: "Enterprise Software",
  referrer: "origin-when-cross-origin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}