const HeroSection = () => {
  return (
    <section className="px-4 py-12 text-center bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">
          Where Destinations Reach Their DMC
        </h1>
        <p className="text-sm md:text-base text-teal-800 leading-relaxed mb-6">
          DMC is a premier Destination Management Company specializing in
          curated travel experiences, and unforgettable events. We deliver
          personalized services that elevate every journey — from corporate
          events and incentive travel to luxury leisure and group tours. At DMC,
          your destination meets perfection.
        </p>
        <button className="px-5 py-2 bg-teal-700 text-white text-sm rounded hover:bg-teal-800 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
