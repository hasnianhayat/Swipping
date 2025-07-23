import React from "react";
import FeatureSection from "./FeatureSection";
import trustedpartner from "../assets/new/istockphoto-973374928-2048x2048.jpg";
import localinsgihts from "../assets/new/WhatsApp Image 2025-07-22 at 5.48.50 PM.jpeg";
import realtime from "../assets/new/image (1).png";
import newfrom from "../assets/new/newone.png";

const ExperiencePage = () => {
  return (
    <div className="w-full text-center font-sans">
      {/* Top Section */}
      <section className="px-4 py-12 md:py-20 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          Book Your Experience
        </h1>
        <div className="flex b flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          <div className="bg-[#D9D9D9] w-full md:w-1/2 p-6 rounded shadow">
            <h2 className="text-4xl font-semibold mb-4 text-[#48746D] ">
              Connect with Us
            </h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company Name:
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Official Email:
                </label>
                <input
                  type="email"
                  placeholder="Official Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile number:
                </label>
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Destination:
                </label>
                <textarea
                  rows="4"
                  placeholder="Destination"
                  className="w-full bg-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#48746D] text-white py-2 rounded cursor-pointer transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="text-center h-[400px] items-center flex flex-col justify-center  mt-10 max-w-md">
            <h2 className="text-4xl font-semibold mb-4 text-[#48746D]">
              About Us
            </h2>
            <p className="text-[#48746D] text-sm">
              Global DMC is a premier destination management company (DMC)
              specializing in B2B travel services for travel agents and agencies
              worldwide. With a deep-rooted focus on strengthening partnerships,
              we blend local expertise, destination knowledge, and
              round-the-clock support to deliver seamless travel and event
              experiences across multiple regions.
              <br />
              <br />
              With global presence we have our own offices and DMCs across that
              will lead and connect.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white text-center">
        <div>
          <h2 className="text-xl md:text-4xl text-[#48746D]  font-bold mb-6">
            Why Choose Us
          </h2>
          <FeatureSection />
        </div>


      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="md:w-1/3 w-full mb-8 md:mb-0">
            <p className="text-sm text-gray-500 mb-2 text-start">/ Why Razor?</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#230C0F] mb-6 text-start">
              The Razor Difference
            </h2>
            <p className="text-gray-700 mb-6 text-start">
              For over a decade, we've been a proud service provider, earning
              and maintaining the trust of the community in Saskatoon,
              Martensville, Warman, and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-x-10">
              <a
                href="#"
                className="text-[#B90000] font-medium hover:underline"
              >
                Call Now
              </a>
              <a
                href="#"
                className="text-[#B90000] font-medium hover:underline"
              >
                Book Free Estimate
              </a>
            </div>
          </div>

          <div className="md:w-2/3 w-full flex flex-col lg:flex-row gap-10">
            {/* Left Features */}
            <div className="flex flex-col gap-y-10 flex-1">
              <div className="flex gap-4 flex-wrap items-start mt-20">
                <img
                  src={trustedpartner}
                  alt="Pricing"
                  className="w-12 h-12 min-w-[48px]"
                />
                <div className="text-start">
                  <h3 className="font-semibold text-lg text-[#230C0F]">Trusted Partnerships</h3>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Experience quality without breaking the bank—we offer fair
                    and competitive pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-t-2 border-gray-500 pt-4 flex-wrap items-start">
                <img
                  src={localinsgihts}
                  alt="Certified"
                  className="w-12 h-12 min-w-[48px]"
                />
                <div className="text-start">
                  <h3 className="font-semibold text-lg text-[#230C0F]">Local Insight</h3>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Choose Razor for proven excellence backed by certified professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider for desktop */}
            <div className="hidden lg:block w-px h-auto bg-black mx-6" />

            {/* Right Features */}
            <div className="flex flex-col gap-y-10 flex-1">
              <div className="flex gap-4 border-t pt-4 md:border-none md:pt-0 flex-wrap items-start">
                <img src={realtime} alt="Financing" className="w-12 h-12 min-w-[48px]" />
                <div className="text-start">
                  <h3 className="font-semibold text-lg text-[#230C0F]">Real Time Support</h3>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Don’t let budget constraints stop you—explore our
                    hassle-free <span className="text-[#B90000] font-medium">Financing</span> options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-t-2 border-gray-500 pt-4 flex-wrap items-start">
                <img src={newfrom} alt="Satisfaction" className="w-12 h-12 min-w-[48px]" />
                <div className="text-start">
                  <h3 className="font-semibold text-lg text-[#230C0F]">Effortless Planning</h3>
                  <p className="text-sm text-gray-700 max-w-xs">
                    Don’t just take our word for it —<span className="text-[#B90000] font-medium"> see</span> what Homeowners of Saskatoon say about Razor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </section>
    </div>
  );
};

export default ExperiencePage;
