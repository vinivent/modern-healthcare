import { services } from "../constants";
import Button from "./Button";

const ServiceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } service-card`}
  >
    <div
      className={
        "w-[64px] h-[64px] rounded-full flex justify-center items-center bg-[#7b7e7e]"
      }
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="flex md:flex-row flex-col sm:py-16">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] w-full">
          Você se conecta conosco, <br className="sm:block hidden" />e nós
          cuidamos de você.
        </h2>
        <p
          className={
            "font-poppins font-normal text-[18px] max-w-[470px] mt-5"
          }
        >
          Não importa se você precisa de cuidados de rotina ou tratamento
          especializado, estamos aqui para ajudar. Entre em contato conosco hoje
          para saber mais sobre como podemos ajudá-lo a se conectar com os
          profissionais de saúde de que precisa.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col h-full">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
