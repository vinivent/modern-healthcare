import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center sm:py-16 py-6 flex-col"
    >
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <h1 className="text-white font-poppins font-semibold mr-5">
            BETTER<span className="text-[#6dcac2] font-semibold">HEALTH</span>
          </h1>
          <p
            className={
              "font-poppins font-normal text-white text-[18px] leading-[30.8px] mt-4 max-w-[310px]"
            }
          >
            Conectando você ao melhor da saúde, com segurança e confiabilidade.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-thin text-[14px] leading-[27px] text-white">
          LOCALIZAÇÃO: Rua José Bonifácio, 1141 - Torre Recife - PE | CEP:
          50710-001 <br className="sm:block hidden" /> LIGUE PRA NÓS: (81)
          98870-7458 <br className="sm:block hidden" /> ENVIE UM EMAIL:
          falecom@betterhealth.com.br
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
