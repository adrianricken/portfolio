const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src="../../public/logo.png"
            width={35}
            height={40}
            alt="A R"
            className="m-3"
          />
        </a>{" "}
        <nav className="flex w-full">
          <div className="w-full relative z-2 flex flex-col items-center justify-around m-auto">
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-opacity duration-300 hover:opacity-20"
            >
              about
            </a>
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-opacity duration-300 hover:opacity-20"
            >
              Projekte
            </a>
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-opacity duration-300 hover:opacity-20"
            >
              Kontakt
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
