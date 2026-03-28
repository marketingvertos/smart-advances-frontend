import { Phone, MapPin, Mail, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "AI Growth Consulting",
    "AI SEO Consulting",
    "AI Ads Management",
    "AI Lead Generation",
    "AI Marketing Automation",
  ];

  const resources = [
    { label: "Free AI Tools", href: "/ai-tools" },
    { label: "AI Blog", href: "/blog" },
    { label: "AI Academy", href: "/training" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  return (
    <footer className="bg-[#0B2C5F] text-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3 text-lg md:text-xl font-bold mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#1E5EFF] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">PT</span>
              </div>
              <span className="text-white">Pawan Tripathi</span>
            </Link>

            <p className="text-sm md:text-base text-white/65 mb-6 leading-relaxed max-w-sm">
              India's leading AI marketing consultant helping businesses scale using AI automation, SEO intelligence and data-driven marketing systems.
            </p>

            <div className="flex gap-3">
              <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-[#1E5EFF] transition-all duration-300 hover:scale-110">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-[#1E5EFF] transition-all duration-300 hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-[#1E5EFF] transition-all duration-300 hover:scale-110">
                <Youtube size={16} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/10 hover:bg-[#1E5EFF] transition-all duration-300 hover:scale-110">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-5 text-lg text-white">Services</h4>
            <ul className="space-y-3 text-sm md:text-base text-white/65">
              {services.map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-[#60A5FA] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-5 text-lg text-white">Resources</h4>
            <ul className="space-y-3 text-sm md:text-base text-white/65">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-[#60A5FA] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-5 text-lg text-white">Contact</h4>
            <ul className="space-y-4 text-sm md:text-base text-white/65">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#60A5FA] flex-shrink-0" />
                dm@pawantripathi.in
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#60A5FA] flex-shrink-0" />
                +91 9815064617
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#60A5FA] flex-shrink-0" />
                Indore, India
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/15 mt-14 pt-8 text-center">
          <p className="text-sm md:text-base text-white/50">
            © {new Date().getFullYear()} Pawan Tripathi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;