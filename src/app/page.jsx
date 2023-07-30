"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <Hero />
      <Footer />
      {/*    <section className="flex flex-col items-center justify-center p-24"></section> */}
    </div>
  );
}
