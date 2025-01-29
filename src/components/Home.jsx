import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[var(--text-color-dark)]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[var(--highlight-color)]">
          Adrian
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[var(--text-color-light)]">
          i&apos;m an aspiring Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[var(--text-color-dark)]">
          Some more text information about me what i&apos;ve done where i come
          from and what i aim for. I like to do this and that and tell some more
          stuff about me so you can get to know me better.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-[var(--text-color-light)] group border-2 rounded-3xl px-6 py-3 my-2 flex items-center hover:bg-[var(--highlight-color)] hover:border-[var(--highlight-color)]">
              Projekte
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
