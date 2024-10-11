import Link from "next/link";
import React from "react";
import Button from "../Button";

const Projects = () => {
  return (
    <div className="my-10 py-10" id="projects">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>

      <div className="flex flex-col justify-around items-center mx-5 md:mx-0 my-10 s">
        <div className="my-5 ">
          <h2 className="text-[#2e86d3] text-xl uppercase font-bold">
            Courier Web app
          </h2>
          <div className="text-sm py-5">
            <p className="">
              This is a mern stack ongoing project A user can input tracking id
              and he will be redirected to the dashboard containing the tracking
              details An Admin can alter the tracking status, delete tracking,
              add new tracking details, etc....
            </p>
            <div className="flex my-5 justify-between">
              <a href={"https://acm-shippingco.netlify.app/"}>
                <Button text={"View Live"} />
              </a>
              <a href={"https://github.com/Ennygenius/acm-courier"}>
                <Button text={"Github"} />
              </a>
            </div>
          </div>
        </div>
        <div className="my-5 ">
          <h2 className="text-[#2e86d3] text-xl uppercase font-bold">
            Courier Web app
          </h2>
          <div className="text-sm py-5">
            <p className="">
              This is a mern stack ongoing project A user can input tracking id
              and he will be redirected to the dashboard containing the tracking
              details An Admin can alter the tracking status, delete tracking,
              add new tracking details, etc....
            </p>
            <div className="flex my-5 justify-between">
              <a href={"https://acm-shippingco.netlify.app/"}>
                <Button text={"View Live"} />
              </a>
              <a href={"https://github.com/Ennygenius/acm-courier"}>
                <Button text={"Github"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
