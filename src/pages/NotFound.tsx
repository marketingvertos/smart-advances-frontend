import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[10rem] font-bold leading-none text-[#F4F7FB] select-none">
            404
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="-mt-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#1E5EFF]/10 border border-[#1E5EFF]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-semibold text-[#1E5EFF]">Page Not Found</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Oops! This Page Doesn't Exist
          </h2>

          <p className="text-[#6B7280] text-lg mb-8 max-w-md mx-auto leading-relaxed">
            The page you're looking for has been moved, deleted, or never existed.
            Let's get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button
                size="lg"
                className="bg-[#1E5EFF] text-white rounded-full px-8 font-semibold hover:bg-[#0a4ae0] shadow-lg shadow-[#1E5EFF]/25 transition-all"
              >
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold border-[#1E5EFF]/30 text-[#1E5EFF] hover:bg-[#1E5EFF] hover:text-white transition-all"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-[#F4F7FB] border border-[#E2E8F0] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#0F172A] mb-4">Quick Links</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Services",     href: "/services" },
                { label: "Consulting",   href: "/consulting" },
                { label: "Training",     href: "/training" },
                { label: "Blog",         href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "AI Tools",     href: "/ai-tools" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#1E5EFF] hover:text-white hover:border-[#1E5EFF] transition-all duration-200 text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <p className="mt-8 text-sm text-[#6B7280]">
            Need help?{" "}
            <a href="mailto:dm@pawantripathi.in" className="text-[#1E5EFF] font-medium hover:underline">
              Contact us
            </a>
            {" "}or call{" "}
            <a href="tel:+919815064617" className="text-[#1E5EFF] font-medium hover:underline">
              +91 9815064617
            </a>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;