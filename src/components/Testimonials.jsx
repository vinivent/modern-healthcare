import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { robot } from "../assets";

const Testimonials = () => (
  <section id="clients" className="flex items-center justify-center flex-col">
    <div className="rounded-full">
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white w-full">
          O que nossos clientes <br className="sm:block hidden" /> falam sobre
          nós!
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={
              "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left"
            }
          >
            Tudo o que você precisa para facilitar a conexão entre pacientes e
            profissionais de saúde e melhorar a qualidade do atendimento.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-between justify-center w-full z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

// {/* <div className="flex-1 md:my-0 my-10 relative flex justify-center items-center">
// <img src={robot} alt="teste" className="w-[20%] h-[20%] relative z-[5]" />
// </div> */}
