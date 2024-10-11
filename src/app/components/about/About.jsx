import React from "react";
import myPisure from "@/app/public/myPisure.png";
import StackIcon from "tech-stack-icons";
import Image from "next/image";

const About = () => {
  return (
    <div className="my-5" id="about">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="my-10">
        <div className="flex lg:flex-row flex-col justify-around items-center">
          <div className="text p-5 lg:w-[50%]">
            <h2 className="text-2xl font-bold my-3">
              Full Stack Developer | MERN, Python, Django
            </h2>
            <p className="text-base leading-10 py-5">
              As a dedicated Full Stack Developer with 2 years of hands-on
              experience, I specialize in creating dynamic, responsive web
              applications using the MERN stack (MongoDB, Express, React,
              Node.js) as well as Python and Django. My expertise spans both
              frontend and backend development, ensuring seamless integration
              and user-friendly designs that meet modern standards.
            </p>
            <p className="py-5 leading-10">
              I have a strong focus on delivering efficient, scalable solutions
              tailored to client needs, and I enjoy tackling complex challenges
              that require innovative thinking. From building RESTful APIs to
              implementing real-time features, I&apos;m adept at full-cycle
              development and I&apos;m passionate about keeping up with the
              latest trends in technology.
            </p>
            <div className="grid md:grid-cols-8 grid-cols-4 md:w-[70%] place-items-center my-5 gap-4">
              <StackIcon name="html5" className="md:w-[50px] w-[40px]" />
              <StackIcon name="css3" className="md:w-[50px] w-[40px]" />
              <StackIcon name="tailwindcss" className="md:w-[50px] w-[40px]" />
              <StackIcon name="js" className="md:w-[50px] w-[40px]" />
              <StackIcon name="reactjs" className="md:w-[50px] w-[40px]" />
              <StackIcon name="nodejs" className="md:w-[50px] w-[40px]" />
              <StackIcon name="django" className="md:w-[50px] w-[40px]" />
              <StackIcon name="figma" className="md:w-[50px] w-[40px]" />
            </div>
          </div>

          {/* Image Section with Outline */}
          <div className="relative lg:flex hidden justify-center items-center">
            <div className="outline outline-2 outline-orange-500 p-2 relative w-[80%] ">
              <Image
                alt="Inu Enike"
                className="rounded-lg -z-40 -mt-5 md:-mt-10" // Adjust negative margin for pop-out effect
                src={myPisure}
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
