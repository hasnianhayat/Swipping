import React from "react";
import {
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const ExperiencePage = () => {
  return (
    <div className="w-full text-center font-sans">
      {/* Top Section */}
      <section className="px-4 py-12 md:py-20 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          Book Your Experience
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#D9D9D9] w-full md:w-1/2 p-6 rounded shadow">
            <h2 className="text-4xl font-semibold mb-4 text-[#48746D] ">Connect with Us</h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">Company Name:</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Official Email:</label>
                <input
                  type="email"
                  placeholder="Official Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile number:</label>
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Destination:</label>
                <textarea
                  rows="4"
                  placeholder="Destination"
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

          <div className="text-center mt-10 max-w-md">
            <h2 className="text-4xl font-semibold mb-4 text-[#48746D]">About Us</h2>
            <p className="text-[#48746D] text-sm">
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
      <section className="py-16 bg-white text-center">
        <div>
        <h2 className="text-xl md:text-4xl text-[#48746D]  font-bold mb-6">Why Choose Us</h2>
        
    <section className="px-4 py-16 md:py-20 bg-white font-sans md:px-30 ml-[100px] ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <div className=" md:w-[200px] space-y-4  text-center md:text-left">
          <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700 inline-block">
            TRAVEL TO DELIVER
          </span>
          <h2 className="text-3xl md:text-2xl  font-bold">
            Travel-Driven Shipping
          </h2>
          <p className="text-gray-600 text-sm">
            Revolutionizing package delivery—connect, save, earn, and trust in a global network.
          </p>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Item */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <FaGlobeAmericas className="text-2xl mb-3 text-black" />
            <h4 className="font-semibold mb-1">Worldwide</h4>
            <p className="text-sm text-gray-600">
              Send packages globally from any city with matching travelers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <FaMoneyBillWave className="text-2xl mb-3 text-black" />
            <h4 className="font-semibold mb-1">Profitable</h4>
            <p className="text-sm text-gray-600">
              Earn money on travel and fund future trips at reduced costs.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <FaChartLine className="text-2xl mb-3 text-black" />
            <h4 className="font-semibold mb-1">Economical</h4>
            <p className="text-sm text-gray-600">
              Reduce shipping costs by matching travelers to carry packages.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <FaShieldAlt className="text-2xl mb-3 text-black" />
            <h4 className="font-semibold mb-1">Secure Payment</h4>
            <p className="text-sm text-gray-600">
              Payments are safely held until delivery or refunded if canceled.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold">Local Insights & Blog</h2>
      </section>

     
    </div>
  );
};

export default ExperiencePage;
