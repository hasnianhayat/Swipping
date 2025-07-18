import {
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAmericas className="text-3xl mb-4 text-black" />,
    title: "Worldwide",
    description: "Send packages globally from any city with matching travelers.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl mb-4 text-black" />,
    title: "Profitable",
    description: "Earn money on travel and fund future trips at reduced costs.",
  },
  {
    icon: <FaChartLine className="text-3xl mb-4 text-black" />,
    title: "Economical",
    description: "Reduce shipping costs by matching travelers to carry packages.",
  },
  {
    icon: <FaShieldAlt className="text-3xl mb-4 text-black" />,
    title: "Secure Payment",
    description: "Payments are safely held until delivery or refunded if canceled.",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Text Block */}
        <div className="w-full md:w-[300px] space-y-4 text-center md:text-left">
          <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700 inline-block">
            TRAVEL TO DELIVER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Travel-Driven Shipping
          </h2>
          <p className="text-gray-600 text-base">
            Revolutionizing package delivery—connect, save, earn, and trust in a global network.
          </p>
        </div>

        {/* Right Feature Cards Grid */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm transition-transform hover:scale-[1.03]"
            >
              {feature.icon}
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
