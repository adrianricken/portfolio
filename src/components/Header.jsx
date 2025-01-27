const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src="../../public/logo.png" width={100} height={40} alt="A R" />
        </a>{" "}
        <nav className="flex w-full">
          <div className="relative z-2 flex flex-col items-center justify-around m-auto lg:flex-row">
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-red"
            >
              about
            </a>
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-red"
            >
              projects
            </a>
            <a
              href="#"
              className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-red"
            >
              contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
