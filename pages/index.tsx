import Head from "next/head";
import Background from "../components/Background";
import Demo from "../components/Demo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Polaris</title>
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

      <div className="w-screen flex justify-center items-center">
        {/* Background Image */}
        <Background />

        <div className="w-full flex flex-col justify-between items-center gap-y-5">
          {/* Header */}
          <section id="header" className="w-full">
            <Header />
          </section>

          {/* Hero */}
          <section id="hero" className="w-full">
            <Hero />
          </section>

          {/* Features */}
          <section id="features" className="w-full">
            <Features />
          </section>

          {/* Demos */}
          <section id="demos" className="w-full">
            <Demo />
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
