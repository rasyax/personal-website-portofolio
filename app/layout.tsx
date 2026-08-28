import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: 'Portfolio | Fachry Rasya Aldamar',
  description: 'Personal Website Portofolio Fachry Rasya Aldamar',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950">
        {children}
        <header className="flex items-center justify-center py-20"><span className="text-xs text-center antialiased font-thin tracking-widest">This website is still under development; im so sorry if the information provided is incomplete.</span></header>
        </body>
    </html>
  );
}
