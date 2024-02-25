import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../global.css";

const radio = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "isaiah",
  description: "isaiah's personal portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${radio.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24`}>
        {children}
      </body>
    </html>
  );
}