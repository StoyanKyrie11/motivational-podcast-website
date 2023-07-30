"use client";

import React from "react";
import AvatarComponent from "./Avatar";
import { Poppins } from "next/font/google";

const PODCAST_DATA = {
  name: "The Motivational Podcast",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div
      style={{ fontFamily: poppins.className }}
      className=" container mx-auto"
    >
      <div className="flex justify-center items-center">
        <AvatarComponent />
        <div className="text-white text-4xl p-8 scroll-m-20 font-bold tracking-wide">
          {PODCAST_DATA.name}
        </div>
      </div>
    </div>
  );
};

export default Header;
