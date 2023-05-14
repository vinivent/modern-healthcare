import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [lastPosition, setLastPosition] = useState(0);
  const location = useLocation();

  const isCurrentPageHome = location.pathname === "/";
  const navigate = useNavigate();

  const changeBackground = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition < lastPosition) {
      setNavbar(true);
      if (currentPosition === 0) {
        setNavbar(false);
      }
    } else {
      setNavbar(false);
    }
    setLastPosition(currentPosition);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  window.addEventListener("scroll", changeBackground);
  const scrollY = window.pageYOffset;
  return (
    <header>
      <nav
        className={`w-full flex p-4 justify-between navbar items-center ${
          navbar
            ? "bg-gradient-to-r from-slate-900 to-slate-700 top-0 z-50 fixed inset-x-0 transition-opacity duration-500 ease-out opacity-100"
            : `bg-transparent top-0 z-50 absolute inset-x-0 transition-opacity duration-500 ease-out ${
                scrollY === 0 ? "opacity-100" : "opacity-0"
              }`
        }`}
      >
        <a href="/" className="text-white font-poppins font-semibold mr-5">
          BETTER<span className="text-[#6dcac2] font-semibold">HEALTH</span>
        </a>

        <ul className="list-none sm:flex hidden justify-center flex-1 whitespace-nowrap">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-semibold cursor-pointer text-[14px] uppercase ${
                index === navLinks.length - 1 ? "mr-0" : "mr-12"
              } text-white`}
            >
              {isCurrentPageHome ? (
                <Link to={`#${nav.id}`} onClick={() => scrollToElement(nav.id)}>{nav.title}</Link>
              ) : (
                <Link to={`/`} onClick={() => (window.location.hash = nav.id)}>
                  {nav.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="list-none sm:flex hidden justify-end">
          <Button
            styles="ml-5 bg-white w-44 buttonanimation"
            onClick={() => navigate("/login")}
          >
            Entrar
          </Button>
          <Button
            styles="ml-3 bg-[#5eb6ae] text-white w-44 buttonanimation"
            onClick={() => navigate("/signup")}
          >
            Cadastre-se
          </Button>
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
            } p-6 bg-zinc-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex flex-col justify-end flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  {isCurrentPageHome ? (
                    <Link to={`/#${nav.id}`}>{nav.title}</Link>
                  ) : (
                    <Link
                      to={`/`}
                      onClick={() => (window.location.hash = nav.id)}
                    >
                      {nav.title}
                    </Link>
                  )}
                </li>
              ))}
              <Button
                styles="mt-5 bg-white w-44 mb-2"
                onClick={() => navigate("/login")}
              >
                Entrar
              </Button>
              <Button
                styles="bg-[#5eb6ae] text-white w-44"
                onClick={() => navigate("/signup")}
              >
                Cadastre-se
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
