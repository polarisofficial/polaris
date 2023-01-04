import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Tutorial() {
  return (
    <>
      <Head>
        <title>Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="w-screen bg-background flex justify-center items-center">
        <div className="w-3/5 flex flex-col justify-between items-center gap-y-5">
          {/* Header */}
          <section id="header" className="w-full">
            <Header />
          </section>

          {/* Footer */}
          <section id="footer" className="w-full">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
