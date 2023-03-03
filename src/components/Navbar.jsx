import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header>
      <nav
        className={`w-full flex p-4 justify-between items-center ${
          navbar
            ? "bg-gradient-to-r to-purple-900 from-blue-700 top-0 z-50 fixed inset-x-0"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-white font-poppins font-semibold mr-5">LOGO</h1>

        <ul className="list-none sm:flex hidden justify-center flex-1 whitespace-nowrap">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold cursor-pointer text-[14px] uppercase ${
                index === navLinks.length - 1 ? "mr-0" : "mr-12"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <ul className="list-none sm:flex hidden justify-end">
          <Button styles="ml-5 bg-white w-44"> Entrar </Button>
          <Button styles="ml-3 bg-blue-500 text-white w-44">Cadastre-se</Button>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col justify-end flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <Button styles="mt-5 bg-white w-44 mb-2"> Entrar </Button>
              <Button styles="bg-blue-500 text-white w-44">
                {" "}
                Cadastre-se{" "}
              </Button>
              <ul className="list-none sm:flex hidden justify-end"></ul>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
