import React from "react";
import { navItems } from "./data";
import { Signika } from "next/font/google";
import { useAppContext } from "@/app/hooks/Context";
import { GiHamburger } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "@/app//public/my_logo.png";
import Image from "next/image";

// Load the Google Font
const signika = Signika({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const Mobile = () => {
  const { handleNav, navOpen } = useAppContext();

  return (
    <div className="md:hidden block my-5">
      <div className="flex justify-between items-center mx-5">
        {/* <h2>DE IMPERIUM</h2> */}
        <Image src={logo} height={70} width={70} />
        <div className="">
          {navOpen ? (
            <button className="md:hidden block" onClick={handleNav}>
              <MdClose size={25} />
            </button>
          ) : (
            <button className="md:hidden block" onClick={handleNav}>
              <GiHamburger size={25} />
            </button>
          )}
        </div>
      </div>
      {navOpen && (
        <div className="flex justify-center items-center w-full h-[50vh]">
          <ul
            className={`navItems text-sm flex items-center flex-col ${signika.className} text-center`}
          >
            {navItems.map((data, index) => (
              <li key={index} className="py-10">
                <a href={data.path}>{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mobile;
