const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bgddkdxa"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[var(--highlight-color)] text-gray-300">
            Kontakt
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - adrianricken@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Get in touch
        </button>
      </form>
    </div>
  );
};

export default Contact;
