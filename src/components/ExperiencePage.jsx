import React from "react";
import bgImage from "../assets/img2.png"; // Replace with actual background image

const ExperiencePage = () => {
  return (
    <div className="w-full text-center font-sans">
      {/* Top Section */}
      <section className="px-4 py-12 md:py-20 bg-transparent">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          Book Your Experience
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#D9D9D9] w-full md:w-1/2 p-6 rounded shadow">
            <h2 className="text-3xl font-semibold mb-4 text-[#48746D]">Connect with Us</h2>
            <form className="space-y-4 text-left">
              <div>
              
                <input
                  type="text"
           
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
               
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
               
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
               
                <textarea
                  rows="4"
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              {/* <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button> */}
            </form>
          </div>

          <div className="text-ce` max-w-md mt-10">
                 
            <h2 className=" font-bold mb-4 text-[#48746D] text-3xl">About Us</h2>
            <p className="text-gray-700 text-sm">
              Global DMC is a premier destination management company (DMC)
              specializing in B2B travel services for travel agents and
              agencies worldwide. With a deep-rooted focus on strengthening
              partnerships, we blend local expertise, destination knowledge,
              and round-the-clock support to deliver seamless travel and event
              experiences across multiple regions.
              <br /><br />
              With global presence we have our own offices and DMCs across that
              will lead and connect.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16  text-center text-[#48746D]">
        <h2 className="text-xl md:text-3xl font-semibold mb-6">Why Choose Us</h2>
        <h2 className="text-xl md:text-3xl font-semibold">Local Insights & Blog</h2>
      </section>

      {/* Background Image Banner */}
      <section className="w-full overflow-hidden">
        <div className="relative w-full">
          <img
            src={bgImage}
            alt="Scenic view"
            className="w-full h-[300px] md:h-[500px] object-cover object-center"
          />
          <div className="absolute bottom-8 left-6 md:left-10 text-white font-semibold text-sm md:text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
            Connecting Your Travel Dreams.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
