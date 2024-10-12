import localFont from "next/font/local";
import "./globals.css";
import { AppContext, AppContextProvider } from "./hooks/Context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Imperium",
  description: "De Imperium Portfolio",
  openGraph: {
    url: "https://george-delta.vercel.app/",
    title: "Imperium",
    description: "De Imperium Portfolio",
    images: [
      {
        url: "https://george-delta.vercel.app/social-banner.png",
        alt: "Social Banner",
      },
    ],
    site_name: "Imperium",
  },
  twitter: {
    handle: "@yourTwitterHandle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
