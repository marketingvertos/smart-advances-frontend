import {
  Phone,
  MapPin,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  Twitter
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-accent text-primary-foreground py-16 md:py-20 lg:py-24">

    <div className="container mx-auto px-4 max-w-7xl">

      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* BRAND */}

        <div>

          <Link
            to="/"
            className="flex items-center gap-3 text-lg md:text-xl font-bold mb-5"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-md">
              <span className="text-accent-foreground font-bold text-sm">
                PT
              </span>
            </div>

            <span>Pawan Tripathi</span>
          </Link>

          <p className="text-sm md:text-base text-primary-foreground/70 mb-6 leading-relaxed max-w-sm">
            India's leading AI marketing consultant helping businesses scale
            using AI automation, SEO intelligence and data-driven marketing
            systems.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-3">

            <a
              className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-indigo-900 
              transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={16} />
            </a>

            <a
              className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-indigo-900 
              transition-all duration-300 hover:scale-110"
            >
              <Instagram size={16} />
            </a>

            <a
              className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-indigo-900 
              transition-all duration-300 hover:scale-110"
            >
              <Youtube size={16} />
            </a>

            <a
              className="p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-indigo-900 
              transition-all duration-300 hover:scale-110"
            >
              <Twitter size={16} />
            </a>

          </div>

        </div>

        {/* SERVICES */}

        <div>

          <h4 className="font-semibold mb-5 text-lg">
            Services
          </h4>

          <ul className="space-y-3 text-sm md:text-base text-primary-foreground/70">

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Growth Consulting
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                AI SEO Consulting
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Ads Management
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Lead Generation
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Marketing Automation
              </Link>
            </li>

          </ul>

        </div>

        {/* RESOURCES */}

        <div>

          <h4 className="font-semibold mb-5 text-lg">
            Resources
          </h4>

          <ul className="space-y-3 text-sm md:text-base text-primary-foreground/70">

            <li>
              <Link
                to="/ai-tools"
                className="hover:text-yellow-400 transition-colors"
              >
                Free AI Tools
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Blog
              </Link>
            </li>

            <li>
              <Link
                to="/training"
                className="hover:text-yellow-400 transition-colors"
              >
                AI Academy
              </Link>
            </li>

            <li>
              <Link
                to="/case-studies"
                className="hover:text-yellow-400 transition-colors"
              >
                Case Studies
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h4 className="font-semibold mb-5 text-lg">
            Contact
          </h4>

          <ul className="space-y-4 text-sm md:text-base text-primary-foreground/70">

            <li className="flex items-center gap-3">

              <Mail className="h-4 w-4 text-yellow-400" />

              dm@pawantripathi.in

            </li>

            <li className="flex items-center gap-3">

              <Phone className="h-4 w-4 text-yellow-400" />

              +91 9815064617

            </li>

            <li className="flex items-center gap-3">

              <MapPin className="h-4 w-4 text-yellow-400" />

              Indore, India

            </li>

          </ul>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="border-t border-primary-foreground/20 mt-14 pt-8 text-center">

        <p className="text-sm md:text-base text-primary-foreground/60">
          © {new Date().getFullYear()} Pawan Tripathi. All rights reserved.
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;