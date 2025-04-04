/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "./Responsive.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

import Header from "@/component/common/Layout/Header/Header";
import Footer from "@/component/common/Layout/Footer/Footer";
import ScrollProgressBar from "@/component/common/Layout/ScrollBar/ScrollBar";

export const metadata: Metadata = {
  title: "Zygobit",
  description: "Zygibit Website",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Zygobit",
    description: "Zygibit Website",
    images: [
      "https://developers.google.com/static/search/docs/images/licensable-images-callouts.png",
    ],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Zygobit",
    description: "Zygibit Website",
    images: [
      "https://developers.google.com/static/search/docs/images/licensable-images-callouts.png",
    ],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
        <Script
          strategy="lazyOnload"
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        ></Script>
      </head>
      <body>
        <Header />
        <ScrollProgressBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
