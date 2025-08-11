import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Hero from "./pages/public/Hero";
import About from "./pages/public/About";
import Partners from "./pages/public/Partners";
import Services from "./pages/public/Services";
import ContactUs from "./pages/public/ContactUs";
import Footer from "./components/Layout/Footer";
import Register from "./pages/register/register";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pt-20 ">
      <div className="bg-blend-multiply bg-gradient-to-b from-black  via-[#00100E] to-[#002F2A]">
        <div className="fixed inset-0 w-screen h-screen bg-[url('/background.jpg')] brightness-50 bg-cover bg-center bg-no-repeat z-0" />
        <div className="fixed inset-0 w-screen h-screen  bg-gradient-to-b from-black via-[#001A17] to-[#002F2A] opacity-80 z-10" />
        <div className="relative z-10">
          <section className="overflow-hidden flex flex-col px-6 py-6">
            <Hero />
          </section>
          <About />
          <Partners />
          <Services />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pt-20">
      <div className="fixed inset-0 w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat z-0" />
      <section className="h-screen bg-white/10 backdrop-blur-md rounded-lg mt-[20px] mx-[20px] mb-[20px] overflow-hidden shadow-md flex flex-col px-6 py-6">
        <Register />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="fixed top-0 inset-x-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
