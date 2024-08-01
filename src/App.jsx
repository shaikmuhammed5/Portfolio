/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  const [isDark, setIsDark] = useState(true);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <section className="app" theme={isDark ? "light" : "dark"}>
      <Navbar themeChange={handleTheme} theme={isDark} />

      <div className="container">
        <Hero />
        <Skills />
        <Project />
        <ContactMe />
      </div>
      <Footer />
    </section>
  );
}

export default App;
