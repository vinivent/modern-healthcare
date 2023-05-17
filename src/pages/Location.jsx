import { useState } from "react";
import { Navbar, Footer } from "../components";
import { VscSearch } from "react-icons/vsc";
import Map from "../components/GoogleMap";

const Location = () => {
  const [text, setText] = useState("");
  const markers = [
    { lat: -8.030348440588218, lng: -34.90713462650244 }, // Hospital Agamenon Magalhães
    { lat: -8.038612169827044, lng: -34.93906773501825 }, // Hospital Barão de Lucena
    { lat: -8.034021214028282, lng: -34.9047481263107 }, //  Hospital Correia Picanço
    { lat: -8.053553302873599, lng: -34.897737574836746 }, //  Hospital da Restauração
    { lat: -7.968487338022034, lng: -34.89335352280588 }, // Hospital Geral da Mirueira
    { lat: -8.100205240014073, lng: -34.92638623221825 }, //  Hospital Geral de Areias
    { lat: -8.051314541181151, lng: -34.92221537062988 }, //  Hospital Getúlio Vargas
    { lat: -8.164702186238364, lng: -34.923620556668034 }, //  Hospital Jaboatão Prazeres
    { lat: -7.917507085618311, lng: -34.89138038020655 }, //  Hospital Metropolitano Norte
    { lat: -8.069757202460918, lng: -34.9502818183437 }, //  Hospital Metropolitano Oeste
    { lat: -8.24798723138739, lng: -35.00945605639024 }, //  Hospital Metropolitano Sul
    { lat: -8.082895538405635, lng: -34.96267684104185 }, //  Hospital Otávio de Freitas
    { lat: -8.03132446770646, lng: -34.90301885709931 }, //  Hospital Psiquiátrico Ulysses
  ];
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
              <span className="text-[#5dada5] inline-block">qualidade</span> com
              rapidez e facilidade.
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
            <Map markers={markers} />
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
