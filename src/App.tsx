import Header from "./components/Layout/Header";
import Hero from "./pages/public/Hero";
import About from "./pages/public/About";
import Partners from "./pages/public/Partners";
import Services from "./pages/public/Services";
import ContactUs from "./pages/public/ContactUs";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[url('../public/background.webp')] bg-cover bg-center bg-no-repeat px-4 py-6">
      <section className="h-screen bg-black/10 backdrop-blur-md rounded-lg max-w-7xl mx-auto overflow-hidden shadow-md flex flex-col">
        <Header />
        <Hero />
      </section>

      <About />
      <Partners />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
