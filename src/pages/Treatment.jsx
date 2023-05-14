import { Navbar, Footer } from "../components";
import { treatment } from "../assets";
import { GiHealthNormal } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { TbHeartHandshake } from "react-icons/tb";
import { RiHealthBookLine } from "react-icons/ri";

const Treatment = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1440px] w-full mb-[74px]">
          <Navbar />
        </div>
      </div>

      <div className="bg-[#d7d7d7] sm:px-16 px-6 flex justify-center items-start">
        <div className="w-full">
          <div className="flex flex-row justify-between items-center">
            <h1 className="sm:translate-x-[200px] translate-x-[0px] font-medium text-5xl font-poppins leading-relaxed">
              Oferecemos diferentes <br />
              opções de atendimento para <br />
              que você possa escolher
              <br /> a melhor que se
              <span className="text-[#5dada5]"> adapta</span> às <br /> suas
              necessidades:
              <div className="flex flex-col justify-center mt-8">
                <h2 className="flex flex-row items-center text-dimGrey text-xl mb-2 font-normal">
                  <GiHealthNormal className="mr-2 text-[#53968f] text-[35px]" />{" "}
                  Atendimento público de sáude (SUS)
                </h2>
                <h2 className="flex flex-row items-center text-dimGrey text-xl mb-2 font-normal">
                  <BsCashStack className="mr-2 text-[#53968f] text-[35px]" />{" "}
                  Particular
                </h2>
                <h2 className="flex flex-row items-center text-dimGrey text-xl mb-2 font-normal ">
                  <TbHeartHandshake className="mr-2 text-[#53968f] text-[35px]" />{" "}
                  Convênios
                </h2>
                <h2 className="flex flex-row items-center text-dimGrey text-xl font-normal">
                  <RiHealthBookLine className="mr-2 text-[#53968f] text-[35px]" />{" "}
                  Plano de saúde
                </h2>
              </div>
            </h1>

            <img
              src={treatment}
              alt="treatment"
              className="w-[550px] translate-x-[65px] sm:flex hidden"
            />
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

export default Treatment;
