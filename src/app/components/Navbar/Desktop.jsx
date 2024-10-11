"use client";
import React from "react";
import { navItems } from "./data";
import { Signika } from "next/font/google";
import Button from "../Button";
import Mobile from "./Mobile";

// Load the Google Font
const signika = Signika({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const Desktop = () => {
  return (
    <header className="">
      <div className="hidden md:grid md:grid-cols-3 md:gap-0 gap-[5rem] grid-cols-2 place-items-center my-6">
        <div className="">
          <h2>DE IMPERIUM</h2>
        </div>
        <nav className="">
          <ul
            className={`navItems text-sm flex items-center ${signika.className}`}
          >
            {navItems.map((data, index) => (
              <li key={index} className="px-7">
                <a href={data.path} aria-label={data.name}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:block hidden">
          <Button font={signika.className} text={"Contact Me"} />
        </div>
      </div>
      <Mobile />
    </header>
  );
};

export default Desktop;
