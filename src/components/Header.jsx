"use client";

import { openSans } from "@src/app/layout";
import ThemeToggle from "./ThemeToggle";

const PODCAST_DATA = {
  name: "The Motivational Podcast",
};

const Header = () => {
  return (
    <div
      className={`${openSans.variable} container mx-auto`}
    >
      <div className="flex justify-center items-center">
        <div className="text-white text-4xl p-8 scroll-m-20 font-bold tracking-wide">
          {PODCAST_DATA.name}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
