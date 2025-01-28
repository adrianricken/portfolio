// import WorkImg from "../assets/"

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Experience
          </p>
          <p className="py-6">
            Some projects i&apos;ve been working on in the past
          </p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card container */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div>
              <div>
                <span></span>
                <div>
                  <a href="/">
                    <button></button>
                  </a>
                  <a href="/">
                    <button></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      Experience
    </div>
  );
};

export default Experience;
