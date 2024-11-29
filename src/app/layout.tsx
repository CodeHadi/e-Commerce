"use client"
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Cart from "@/components/Cart";

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

// export const metadata: Metadata = {
//   title: "Modern Product Showcase:",
//   description:
//     "A responsive e-commerce site using Next.js and Tailwind CSS with intuitive navigation and product listings.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showCard , setShowCart] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Header  setShowCart={setShowCart}/>
          {showCard && <Cart  setShowCart={setShowCart}/>}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
