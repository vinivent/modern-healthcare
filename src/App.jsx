import { Navbar, Hero, Footer, Services } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={``}>
      <div className={``}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary `}>
      <Hero />
    </div>

    <div className={`bg-primary `}>
      <div className={``}>
        <Services />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
