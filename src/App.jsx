import "./index.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Background />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
