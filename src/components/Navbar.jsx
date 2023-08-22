"use client";

import { Poppins } from "next/font/google";
import ThemeToggle from "./ThemeToggle";

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
        className="grid grid-cols-4 mx-autо text-xl items-center justify-center space-x-5 dark:bg-navbar-bg-color bg-primary-color p-4"
      >
  

      </nav >
    </>
  );
};
export default Navbar;
