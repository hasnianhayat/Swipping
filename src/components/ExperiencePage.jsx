import React from "react";
import FeatureSection from "./FeatureSection";

const ExperiencePage = () => {
  return (
    <div className="w-full text-center font-sans">
      {/* Top Section */}
      <section className="px-4 py-12 md:py-20 bg-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-10">
          Book Your Experience
        </h1>
        <div className="flex b flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
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

              {/* Submit Button */}
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
        <h2 className="text-xl md:text-2xl font-semibold">
          Local Insights & Blog
        </h2>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            {/* Left Section */}
            <div className="md:w-1/3">
              <p className="text-sm text-gray-500 mb-2 items-start text-start">
                / Why Razor?
              </p>
              <h2 className="text-4xl md:text-6xl  items-start text-start font-semibold text-[#230C0F] mb-6">
                The Razor Difference
              </h2>
              <p className="text-gray-700 items-start justify-start text-start mb-6">
                For over a decade, we've been a proud service provider, earning
                and maintaining the trust of the community in Saskatoon,
                Martensville, Warman, and surrounding areas.
              </p>
              <div className="flex  gap-x-10">
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

            {/* Middle & Right Section */}
            <div className="md:w-2/3 flex gap-10">
              <div className="flex flex-col gap-y-10 mt-18">
                {/* Competitive Pricing */}
                <div className="flex gap-4">
                  <img
                    src="/icons/pricing-icon.svg"
                    alt="Pricing"
                    className="w-10 h-10"
                  />
                  <div className="items-start text-start">
                    <h3 className="font-semibold text-lg items-start text-start text-[#230C0F]">
                      Competitive Pricing
                    </h3>
                    <p className="text-sm items-start text-start w-[70%] text-gray-700">
                      Experience quality without breaking the bank—we offer fair
                      and competitive pricing.
                    </p>
                  </div>
                </div>

                {/* Certified Experts */}
                <div className="flex gap-4 border-t pt-4">
                  <img
                    src="/icons/certified-icon.svg"
                    alt="Certified"
                    className="w-10 h-10"
                  />
                  <div>
                    <h3 className="font-semibold items-start text-start text-lg text-[#230C0F]">
                      Certified Experts
                    </h3>
                    <p className="text-sm items-start text-start text-gray-700">
                      Choose Razor for proven excellence backed by certified
                      professionals.
                    </p>
                  </div>change
                </div>
              </div>

              <div className="w-[1px] h-full bg-black"></div>

              <div className="flex flex-col gap-y-10">
                {/* Easy Financing */}
                <div className="flex gap-4 border-t pt-4 md:border-none md:pt-0">
                  <img
                    src="/icons/financing-icon.svg"
                    alt="Financing"
                    className="w-10 h-10"
                  />
                  <div>
                    <h3 className="font-semibold items-start text-start text-lg text-[#230C0F]">
                      Easy Financing
                    </h3>
                    <p className="text-sm items-start text-start text-gray-700">
                      Don’t let budget constraints stop you—explore our
                      hassle-free{" "}
                      <span className="text-[#B90000] font-medium">
                        Financing
                      </span>{" "}
                      options.
                    </p>
                  </div>
                </div>

                {/* 100% Satisfaction */}
                <div className="flex gap-4 border-t pt-4">
                  <img
                    src="/icons/satisfaction-icon.svg"
                    alt="Satisfaction"
                    className="w-10 h-10"
                  />
                  <div>
                    <h3 className="font-semibold items-start text-start text-lg text-[#230C0F]">
                      100% Satisfaction
                    </h3>
                    <p className="text-sm items-start text-start text-gray-700">
                      Don’t just take our word for it —
                      <span className="text-[#B90000] font-medium"> see</span>{" "}
                      what Homeowners of Saskatoon say about Razor.
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
