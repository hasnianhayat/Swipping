import {
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAmericas className="text-4xl mb-4 text-black" />,
    title: "Effortless Planning",
    description: "Send packages globally from any city with matching travelers.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl mb-4 text-black" />,
    title: "Trusted Partnerships",
    description: "Earn money on travel and fund future trips at reduced costs.",
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-black" />,
    title: "Real time support",
    description: "Reduce shipping costs by matching travelers to carry packages.",
  },
  {
    icon: <FaShieldAlt className="text-4xl mb-4 text-black" />,
    title: "tailored experience",
    description: "Payments are safely held until delivery or refunded if canceled.",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-white font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start justify-center">
        {/* Left Text Section */}
        <div className="w-full md:w-[250px] space-y-4 text-center md:text-left">
          <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700 inline-block">
            TRAVEL TO DELIVER
          </span>
          <h2 className="text-3xl md:text-2xl font-bold leading-snug">
            Travel-Driven Shipping
          </h2>
          <p className="text-gray-600 text-[15px]">
            Revolutionizing package delivery—connect, save, earn, and trust in a global network.
          </p>
        </div>

        {/* Right Feature Cards Grid */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-md transition-transform hover:scale-[1.03] min-h-[200px]"
            >
              {feature.icon}
              <h4 className="font-semibold text-xl mb-2 text-left">{feature.title}</h4>
              <p className="text-base text-gray-600 text-left">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
