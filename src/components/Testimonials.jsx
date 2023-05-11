import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className="flex items-center justify-center flex-col"
  >
   
    <hr className="hidden sm:flex items-center justify-center w-[750px] border-[#a7a5a5] mb-4"/>
    <div className="rounded-full">
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] w-full">
          O que nossos clientes <br className="sm:block hidden" /> falam sobre
          nós!
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={
              "font-poppins font-normal text-dimGrey text-[18px] leading-[30.8px] text-left"
            }
          >
            Tudo o que você precisa para facilitar a conexão entre pacientes e
            profissionais de saúde e melhorar a qualidade do atendimento.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
