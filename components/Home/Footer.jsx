import React from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiGoogleDrive } from "react-icons/di";

const Footer = () => {
  return (
    <>
      <footer className="w-full m-auto flex flex-col">
        <span className="border-gray-700  mt-16 mb-6 w-full p-0 border justify-center"></span>
        <div className="container flex flex-col-reverse justify-between px-6 pt-10 pb-0 mx-auto space-y-8  md:space-y-0">
          {/* logo and social links */}
          <div className="flex flex-col-reverse  items-center justify-between space-y-12  md:space-y-0 md:items-center">
            <div className="mx-auto my-6 text-center text-white text-sm ">
              Copyright &copy; 2023, All right reserved.
            </div>

            <div className="flex justify-center space-x-4 ">
              <a href="#" className="">
                <AiFillTwitterCircle className="text-xl text-[#0baab5]" />
              </a>
              <a href="#" className="">
                <AiFillGithub className="text-xl text-[#0baab5]" />
              </a>
              <a href="#" className="">
                <DiGoogleDrive className="text-xl text-[#0baab5]" />
              </a>
            </div>
          </div>

          <div className="flex  justify-center items-center w-auto space-x-32 ">
            <div className="flex flex-col md:flex-row space-y-3  md:gap-5 md:py-5 justify-center items-center">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Faqs
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
