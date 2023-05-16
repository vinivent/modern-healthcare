import { Navbar, Footer } from "../components";
import { treatment } from "../assets";
import { GiHealthNormal } from "react-icons/gi";
import { BsCashStack } from "react-icons/bs";
import { TbHeartHandshake } from "react-icons/tb";
import { RiHealthBookLine } from "react-icons/ri";

const Treatment = () => {
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
          <div className="flex flex-col sm:flex-row justify-between items-start mt-24">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h1 className="font-medium xl:text-5xl text-3xl md:text-3xl font-poppins xl:ml-36 md:ml-0 ml-0">
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
                  <h2 className="flex flex-row items-center text-dimGrey text-xl font-normal sm:mb-0 mb-10">
                    <RiHealthBookLine className="mr-2 text-[#53968f] text-[35px]" />{" "}
                    Plano de saúde
                  </h2>
                </div>
              </h1>
            </div>

            <img
              src={treatment}
              alt="treatment"
              className="w-[550px] translate-x-[65px] sm:flex hidden -mt-24"
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
