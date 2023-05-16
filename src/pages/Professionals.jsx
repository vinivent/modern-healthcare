import { Navbar, Footer } from "../components";
import { logo2, professionals } from "../assets";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { professionalsList } from "../constants";
import { Link } from "react-router-dom";

const Professionals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full">
      {window.scrollTo(0, 0)}
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1440px] w-full mb-[74px]">
          <Navbar />
        </div>
      </div>

      <div className="bg-[#d7d7d7] sm:px-16 px-6 flex justify-center items-start">
        <div className="w-full">
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="flex flex-row justify-between items-start mt-7">
              <h1 className="font-medium text-5xl font-poppins leading-relaxed">
                Descubra uma variedade de <br /> especialistas altamente <br />{" "}
                <span className="text-[#5dada5]"> qualificados</span> às de
                diversas <br /> áreas da saúde
                <img
                  src={professionals}
                  alt="treatment"
                  className="w-[750px] translate-x-[65px] sm:flex hidden mt-20"
                />
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center sm:w-[650px] w-full rounded-lg mt-8 sm:mb-0 mb-24">
              <img
                src={logo2}
                alt="logo"
                className="w-[20%] mb-24 fill-purple-800"
              />

              <button
                onClick={() => {
                  setSelectedItem(isOpen ? null : "areas");
                  setIsOpen((prev) => !prev);
                }}
                className="bg-[#5DADA5] p-4 w-full flex items-center justify-between font-poppins text-lg font-bold rounded-lg tracking-wider"
              >
                {selectedItem === "areas" ? "Voltar" : "Áreas que atuamos"}
                {!isOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpen && selectedItem === "areas" && (
                <div className="bg-[#5DADA5] flex flex-col items-start rounded-lg p-2 w-full dropdown-items mt-5">
                  {professionalsList.map((item, index) => (
                    <Link
                      to={`/login`}
                      key={index}
                      className="flex w-full justify-between hover:bg-[#8acac4] cursor-pointer p-4 rounded-r-lg border-l-transparent"
                    >
                      <div className="text-base capitalize">{item.title}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1440px] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Professionals;
