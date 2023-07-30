"use client";

import React from "react";
import AboutMePage from "@/src/app/(routes)/about/page";
import ChannelsPage from "@/src/app/(routes)/channels/page";
import HomePage from "@/src/app/(routes)/home/page";
import PartnersPage from "@/src/app/(routes)/partners/page";
import ThemeToggle from "./ThemeToggle";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <nav
        style={{ fontFamily: poppins.className }}
        className="flex mx-autо text-xl items-center justify-center space-x-5 dark:bg-navbar-bg-color bg-primary-color p-4"
      >
        <ThemeToggle />
        <ul className="flex justify-center space-x-4">
          <li className="text-whitS hover:text-orange-300 transition duration-300">
            <HomePage />
          </li>
          <li className="text-white hover:text-pink-300 transition duration-300">
            <AboutMePage />
          </li>
          <li className="text-white hover:text-blue-300 transition duration-300">
            <ChannelsPage />
          </li>
          <li className="text-white hover:text-gray-300 transition duration-300">
            <PartnersPage />
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
