import { Navbar, Hero, Footer, Services, Testimonials } from "../components";
import ServicesLinks from "../components/ServicesLinks";

const Home = () => {
  return (
    <div className="bg-zinc-800 w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1440px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <Hero />
      </div>

      <div className="bg-[#d7d7d7] sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1440px] w-full">
          <Services />
          <ServicesLinks />
          <Testimonials />
        </div>
      </div>

      <div className="bg-zinc-800 sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1440px] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
