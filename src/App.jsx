import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
