import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import How from "./components/How/How";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className={`${showLogin ? " bg-opacity-50" : ""}`}
    >
      <Navbar setShowLogin={setShowLogin} />
      <Hero showLogin={showLogin} setShowLogin={setShowLogin} />
      <About/>
      <How/>
      <Footer />
    </div>
  );
};

export default App;
