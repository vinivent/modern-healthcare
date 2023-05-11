import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section
        id="home"
        className={`relative flex md:flex-row flex-col items-center bg-no-repeat box-shadow-inner object-contain`}
        style={{ overflow: "hidden" }}
      >
        <div className="relative h-full">
          <video
            src="./videos/video2.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full bg-black opacity-40"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-white mt-9 sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-2">
              Better<span className="text-[#6dcac2]">Health</span>
            </h1>
            <p className="text-white text-xs md:text-lg lg:text-xl font-medium mb-3 max-w-3xl ">
              Nossa empresa oferece uma plataforma de atendimento online para
              conectar pacientes e profissionais da saúde, proporcionando um
              atendimento personalizado e acessível.{" "}
              <span className="font-bold text-[#6dcac2] font-poppins">
                Cuidar da sua saúde nunca foi tão fácil!
              </span>
            </p>
            <div className="flex flex-row">
              <Button
                styles="bg-white flex text-center items-center justify-center h-9 h-10 mr-3 buttonanimation"
                onClick={() => navigate("/treatment")}
              >
                Atendimento Gratuito
              </Button>
              <Button
                styles="bg-white flex text-center items-center justify-center h-9 h-10 buttonanimation"
                onClick={() => navigate("/contact")}
              >
                Fale com um consultor
              </Button>
            </div>
          </div>
        </div>
        <div className="md:hidden" />
      </section>
    </div>
  );
};

export default Hero;
