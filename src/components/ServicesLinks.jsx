import React from "react";
import { serviceLink } from "../constants";
import { useNavigate } from "react-router-dom";
const ServicesCard = ({ icon: Icon, content, title, index, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col justify-center items-center p-6 rounded-[20px] bg-[#e3f1f1] h-[250px] w-[450px] sm:mb-0 mb-4 cursor-pointer ${
      index !== serviceLink.length - 1 ? "mr-6" : "mr-0"
    } service-card`}
  >
    <div
      className={
        "w-[64px] h-[64px] rounded-full flex justify-center mt-8 items-center bg-[#7b7e7e]"
      }
    >
      <Icon alt="icon" className="w-[50%] h-[50%] object-contain text-[#6dcac2]" />
    </div>
    <div className="justify-center items-center flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-[18px] mt-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] mt-4 mb-1 text-center">
        {content}
      </p>
    </div>
  </div>
);
const ServicesLinks = () => {
  const navigate = useNavigate();
  return (
    <section
      className={`flex flex-col justify-center items-center mt-4`}
    >
      <p className="font-poppins text-xl drop-shadow-md font-semibold mb-10">
        Nossos Serviços
      </p>

      <div className="flex sm:flex-row flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 mb-14">
        {serviceLink.map((service, index) => (
          <ServicesCard
            key={service.id}
            {...service}
            index={index}
            onClick={() => navigate(service.link)}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesLinks;
