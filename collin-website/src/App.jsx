import React from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Skills,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
