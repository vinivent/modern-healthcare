import { socialMedias2 } from "../constants";
import Button from "../components/Button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4">
        <Link to="/">
          <img src={logo} width="35" alt="logo" />
        </Link>
      </header>
      <div className="w-full sm:p-8">
        <h1 className="text-4xl sm:text-6xl font-bold font-poppins flex justify-center items-center">
          Cadastre sua conta
        </h1>
        <p
          className="text-lg font-poppins flex justify-center items-center mb-2"
          style={{ color: "#414141" }}
        >
          Cadastre-se usando outras redes sociais
        </p>
        <div className="flex justify-center">
          {socialMedias2.map((social, index) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[35px] h-[35px] object-contain cursor-pointer mb-3 ${
                  index !== socialMedias2.length - 1 ? "mr-4" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
        <div className="sm:ml-[35%]">
          <p className="line sm:w-1/2 text-sm font-poppins uppercase mb-3 sm:p-0 p-3">
            ou
          </p>
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-2 rounded-2xl w-full sm:w-1/2 mb-4 bg-[#edf5f3]"
            style={{
              fontFamily: "poppins, sans-serif",
              fontWeight: "500",
              fontSize: "15px",
            }}
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Senha"
              className="px-4 py-2 rounded-2xl w-full sm:w-1/2 bg-[#edf5f3]"
              style={{
                fontFamily: "poppins, sans-serif",
                fontWeight: "500",
                fontSize: "15px",
              }}
            />
            <div
              className="absolute right-4 top-1/2 transform sm:w-1/2 sm:mr-4 -translate-y-1/2 cursor-pointer text-[#9FA6B1]"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ml-14 mt-4">
          <Button
            styles="bg-[#5eb6ae] text-white w-44 h-12 mr-3 buttonanimation"
            onClick={() => navigate("/")}
          >
            Cadastrar
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="font-poppins">
            Já possui uma conta?{" "}
            <Link
              className="font-poppins font-medium text-[#5eb6ae]"
              to="/login"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
