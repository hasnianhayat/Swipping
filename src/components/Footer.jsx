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
    <div className="shapedividers_com-7259">
      <footer
        className="w-full relative text-white font-sans"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 flex flex-col gap-12">
          <div>
            <h1
              className="text-4xl mt-10 md:text-9xl font-bold tracking-tight text-white/30 text-center"
              style={{ textShadow: "0 4px 24px #0008" }}
            >
              Breathe In Nature
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-8">
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto">
              Join the Selva Insider Club – Be the first <br className="hidden sm:block" /> to uncover new
              trails and secret spots.
            </p>
            <form className="w-full sm:max-w-md flex flex-col sm:flex-row items-center gap-3 mx-auto">
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full rounded-full px-5 py-3 text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-[#648337] 
                bg-white/20 backdrop-blur-md"
              />
              <button
                type="submit"
                className="rounded-full bg-[#648337] text-gray-900 font-semibold px-7 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-left">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h3 className="text-[#648337] font-semibold mb-3 text-base md:text-lg">
                  {col.title}
                </h3>
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

        {/* Extra styles for small screen title */}
        <style>{`
          @media (max-width: 640px) {
            footer h1 {
              font-size: 2rem !important;
            }
          }
        `}</style>
      </footer>

      {/* Shape Divider Styles */}
      <style>{`
        .shapedividers_com-7259 {
          overflow: hidden;
          position: relative;
        }
        .shapedividers_com-7259::before {
          content: '';
          position: absolute;
          z-index: 3;
          pointer-events: none;
          left: 0;
          right: 0;
          top: 0;
          height: 160px;
          background: linear-gradient(to bottom, #fff 0%, #fff 20%, rgba(255,255,255,0.0) 100%);
        }
        @media (min-width: 2100px) {
          .shapedividers_com-7259::before {
            height: calc(2vw + 90px);
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
