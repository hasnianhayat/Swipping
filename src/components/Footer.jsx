
import React from "react";
import bgimage from "../assets/image2.jpg";

const footerLinks = [
  {
    title: "Explore",
    links: ["Home", "My Adventures", "Cancellation policy"],
  },
  {
    title: "Learn",
    links: ["How It Works", "Safety Tips", "FAQ", "Blog"],
  },
  {
    title: "Community",
    links: ["Testimonials", "Partner Stories", "Events & Meetups"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer
      className="w-full relative text-white font-sans"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col gap-12">
        <div>
          <h1 className="text-4xl md:text-9xl font-bold tracking-tight text-white/30 text-center" style={{ textShadow: '0 4px 24px #0008' }}>
            Breathe In Nature
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center text-center gap-6">

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto  ">
            Join the Selva Insider Club - Be the first <br /> to uncover new trails and secret spots.
          </p>
          <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mx-auto">
            <input
              type="email"
              placeholder="E-mail address"
              className="flex-1 rounded-full px-5 py-3 text-gray-900 placeholder-gray-400 
             focus:outline-none focus:ring-2 focus:ring-[#648337] 
             bg-white/20 backdrop-blur-md"
            />

            <button
              type="submit"
              className="rounded-full bg-[#648337]  text-gray-900 font-semibold px-7 py-3 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 text-left">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-[#648337] font-semibold mb-3 text-base md:text-lg">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/90 hover:text-[#648337] text-sm md:text-base transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          footer h1 { font-size: 2rem !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
