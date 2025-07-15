import Header from "./components/Layout/Header";
import Hero from "./pages/public/Hero";
import About from "./pages/public/About";
import Partners from "./pages/public/Partners";
import Services from "./pages/public/Services";
import ContactUs from "./pages/public/ContactUs";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 w-screen h-screen bg-[url('../public/background.webp')] bg-cover bg-center bg-no-repeat z-0" />

      <div className="relative z-10">
        <section className="h-screen bg-black/10 backdrop-blur-md rounded-lg mt-[20px] mx-[20px] overflow-hidden shadow-md flex flex-col px-6 py-6">
          <Header />
          <Hero />
        </section>

        <About />
        <Partners />
        <Services />
        <ContactUs />

        <Footer />
      </div>
    </div>
  );
}

export default App;
