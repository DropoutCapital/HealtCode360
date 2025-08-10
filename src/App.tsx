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
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-t from-black to-[#003832]">
      <div className="fixed inset-0 w-screen h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat z-0" />
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-black to-[#003832] opacity-80 z-[1]" />
      <div className="relative z-10">
        <Header />
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
  );
}

function RegisterPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* <div className="fixed inset-0 w-screen h-screen bg-[url('../public/background.webp')] bg-cover bg-center bg-no-repeat z-0" /> */}
      <div className="fixed inset-0 w-screen h-screen bg-[url('/background.webp')] bg-cover bg-center bg-no-repeat z-0" />
      <section className="h-screen bg-white/10 backdrop-blur-md rounded-lg mt-[20px] mx-[20px] mb-[20px] overflow-hidden shadow-md flex flex-col px-6 py-6">
        <Register />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
