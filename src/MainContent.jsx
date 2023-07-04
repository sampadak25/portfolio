// import React from "react";
// import { FaTwitter, FaFacebook, FaLinkedLn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const MainContent = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1720&q=80"
      />
      <div className="w-full h-screen top-0 left-0 absolute bg-white/50">
        <div className="MAX-W-[700PX] M-AUTO w-full h-full flex flex-col justify-center lg-items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800"
>I am Sampada Kulkarni</h1>
          <h2 className="sm:text-1xl text-1xl font-bold text-gray-800"
>
            I am a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Engineer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block",color:'white' }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
