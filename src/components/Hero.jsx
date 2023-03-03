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
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center">
          <div className="absolute z-[0] w-[20%] h-[30%] top-0 black__gradient" />
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-20 white__gradient" />
          <div className="absolute z-[0] w-[30%] h-[30%] right-10 bottom-10 blue__gradient" />

          <h1 className="text-white  sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
            Adicionar texto
          </h1>
          <p className="text-white sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            blablabla
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
