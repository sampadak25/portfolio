import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99]"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#project"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Project</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration"
            >
              <AiOutlineMenu size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        ) : (
          <div className="md:block hidden fixed top=[25%]  z-10">
            <div className="flex flex-col">
              <a
                href="#main"
                className="rounder-ful shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer "
              >
                <AiOutlineHome size={20} />
              </a>
              <a
                href="#main"
                className="rounder-ful shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer "
              >
                <AiOutlineProject size={20} />
              </a>
              <a
                href="#main"
                className="rounder-ful shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer "
              >
                <GrProjects size={20} />
              </a>
              <a
                href="#main"
                className="rounder-ful shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer "
              >
                <AiOutlineProject size={20} />
              </a>
              <a
                href="#main"
                className="rounder-ful shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer "
              >
                <AiOutlineHome size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidenav;
