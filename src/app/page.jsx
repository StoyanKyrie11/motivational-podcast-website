"use client";

import { lazy } from "react";

const Footer = lazy(() => import("@src/components/Footer"));
const Hero = lazy(() => import("@src/components/Hero"));
const Header = lazy(() => import("@src/components/Header"));
const Navbar = lazy(() => import("@src/components/Navbar"));
const AboutComponent = lazy(() => import("@src/components/AboutComponent"));

export default function Home() {
  return (
    <body className="w-full h-full">
      <article className="grid grid-rows-3 min-h-full">
        <Header />
        <AboutComponent />
        <Navbar />
        <Hero />
        <Footer />
      </article>
    </body>
  );
}
