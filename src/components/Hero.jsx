import Button from "./Button";

const Hero = () => (
  <section
    id="home"
    className={`relative flex md:flex-row flex-col items-center bg-no-repeat box-shadow-inner object-contain h-full w-full`}
  >
    <div>
      <div className="relative">
        <video
          src="./videos/video2.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full  bg-black opacity-40"
        />

        <div className="absolute bottom-0 top-0 left-0 right-0 flex flex-col items-center text-center mt-52">
          <h1 className="text-white  sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-10">
            Better<span className="text-yellow-500">Health</span>
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-3 max-w-3xl">
            Nossa empresa oferece uma plataforma de atendimento online para
            conectar pacientes e profissionais da saúde, proporcionando um
            atendimento personalizado e acessível.{" "}
            <span className="font-bold text-yellow-500">
              Cuidar da sua saúde nunca foi tão fácil!
            </span>
          </p>
          <div className="flex flex-row">
            <Button styles="bg-white flex text-center items-center justify-center w-36 h-8 sm:w-44 md:w-64 lg:w-80 h-auto sm:h-8 md:h-9 lg:h-10 mr-2">
              Teste grátis
            </Button>
            <Button styles="bg-white flex text-center items-center justify-center w-36 h-8 sm:w-44 md:w-64 lg:w-80 h-auto sm:h-8 md:h-9 lg:h-10">
              Fale com um consultor
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
