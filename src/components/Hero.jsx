import Button from "./Button";

const Hero = () => (
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
          Better<span className="text-yellow-500">Health</span>
        </h1>
        <p className="text-white text-xs md:text-lg lg:text-xl font-semibold mb-3 max-w-3xl">
          Nossa empresa oferece uma plataforma de atendimento online para
          conectar pacientes e profissionais da saúde, proporcionando um
          atendimento personalizado e acessível.{" "}
          <span className="font-bold text-yellow-500">
            Cuidar da sua saúde nunca foi tão fácil!
          </span>
        </p>
        <div className="flex flex-row">
          <Button styles="bg-white flex text-center items-center justify-center h-9 h-10 mr-2 buttonanimation">
            Teste grátis
          </Button>
          <Button styles="bg-white flex text-center items-center justify-center h-9 h-10 buttonanimation">
            Fale com um consultor
          </Button>
        </div>
      </div>
    </div>
    <div className="md:hidden" />
  </section>
);

export default Hero;
