import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-[#2E2A72] text-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-block bg-[#4B4696] text-yellow-300 text-xs sm:text-sm px-4 py-1 rounded-full mb-6">
          Digital Marketing Services in Indore
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Growth-Focused Digital Solutions
          <br />
          for Businesses That Want Results
        </motion.h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mt-6">
          I help businesses grow through strategy-led digital marketing,
          performance campaigns, and intelligent automation — not random tactics.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition">
            Request Strategy Consultation →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 max-w-4xl mx-auto">
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">94%</h3>
            <p className="text-sm text-gray-300">ROI Focus</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">100+</h3>
            <p className="text-sm text-gray-300">Systems Built</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Direct</h3>
            <p className="text-sm text-gray-300">Founder Led</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">24/7</h3>
            <p className="text-sm text-gray-300">Live Reporting</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;