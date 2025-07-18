import React from "react";
import {
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const ExperiencePage = () => {


const features = [
  {
    icon: <FaGlobeAmericas className="text-2xl mb-3 text-black" />,
    title: "Local insight",
    description: "Send packages globally from any city with matching travelers.",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl mb-3 text-black" />,
    title: "Effortless Planning",
    description: "Earn money on travel and fund future trips at reduced costs.",
  },
  {
    icon: <FaChartLine className="text-2xl mb-3 text-black" />,
    title: "Trusted Partnerships",
    description: "Reduce shipping costs by matching travelers to carry packages.",
  },
  {
    icon: <FaShieldAlt className="text-2xl mb-3 text-black" />,
    title: "Real time support",
    description: "Payments are safely held until delivery or refunded if canceled.",
  },
];



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
        <h2 className="text-xl md:text-4xl font-semibold mb-6 text-[#48746D]">Why Choose Us</h2>
        
 <section className="px-4 py-16 md:py-20 bg-white font-sans">
  <div className="max-w-7xl mx-auto flex flex-col gap-10">
    {/* Features Grid */}
    <div className="w-full md:w-[950px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-2xl p-8 shadow-md min-h-[220px] transition-transform hover:scale-[1.03]"
        >
          {feature.icon}
          <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
          <p className="text-base text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Blog Heading */}
  <div className="mt-16 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-semibold">Local Insights & Blog</h2>
  </div>
</section>


     
    </div>
  );
};

export default ExperiencePage;
