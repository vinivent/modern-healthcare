import { useState } from "react";
import { Navbar, Footer } from "../components";
import { VscSearch } from "react-icons/vsc";

const Location = () => {
  const [text, setText] = useState("");

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
          <div className="flex flex-col items-center justify-start h-screen mt-10">
            <h1 className="font-poppins font-semibold sm:text-2xl text-[16px] mb-6 text-center">
              Atendimento médico de{" "}
              <span className="text-[#5dada5] inline-block">qualidade</span>{" "}
              com rapidez e facilidade.
            </h1>
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setText(e.target.value)}
                className="sm:w-[730px] w-full border border-[#5dada5] rounded-full h-9 px-4 py-2 pr-10 bg-[#edf5f3] font-poppins text-sm"
                placeholder="Endereço"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#5dada5] text-lg">
                <VscSearch />
              </div>
            </div>
            {console.log(text)}
            <img
              className="mt-6 border border-[#5dada5] drop-shadow-lg rounded-2xl"
              src="https://cdn.discordapp.com/attachments/866771595065557022/1107405342666670110/image.png"
            />
            <div className="bg-[#5dada5] w-screen h-screen -mt-[160px]">
              <h1 className="text-white drop-shadow-lg font-poppins sm:text-2xl text-[15px] font-medium text-center flex justify-center items-center mt-48 mb-64 ">
                Não deixe sua saúde para depois. Encontre a clínica <br /> mais
                próxima de você agora mesmo!
              </h1>
              <div className="bg-zinc-800 sm:px-16 px-6 flex justify-center items-start">
                <div className="xl:max-w-[1440px] w-full">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
