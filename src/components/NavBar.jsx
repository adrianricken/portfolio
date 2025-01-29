import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logo_darkmode.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 backdrop-blur-sm text-gray-300 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
    >
      <div>
        <img src={Logo} alt="Logo Image" className="w-[50px]" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projekte
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="experience"
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

// link to CV:
// https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic
