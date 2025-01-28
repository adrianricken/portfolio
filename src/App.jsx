import "./index.css";
import Background from "./components/Background";
import Header from "./components/Header";
import About from "./components/About";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <Background />
      <NavBar />
      {/* <Header /> */}
      <About />
    </>
  );
}
