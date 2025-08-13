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
      <div className="bg-blend-multiply bg-gradient-to-b from-[#000000]  via-[#00312C] to-[#114D48]">
        <div
          className="fixed inset-0 w-screen h-screen bg-[url('/background.jpg')] brightness-50 
         bg-cover bg-center bg-no-repeat z-0"
        />
        <div className="fixed inset-0 w-screen h-screen  bg-gradient-to-b from-black to-[#03553e] opacity-80 z-10" />
        <div className="fixed top-0 inset-x-0 z-50">
          <Header />
        </div>
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
    <div className="relative overflow-x-hidden pt-0">
      <div className="fixed inset-0 w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat z-0" />
      <section className="h-screen bg-white/20 backdrop-blur-md rounded-lg mt-[20px] mx-[50px] mb-[40px] overflow-hidden shadow-md flex flex-col px-8 py-8">
        <Register />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* <div className="fixed top-0 inset-x-0 z-50">
        <Header />
      </div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
