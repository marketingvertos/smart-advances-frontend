import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Bot,
  Briefcase
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Consulting", href: "/consulting" },
  { label: "Training", href: "/training" }
];

const resources = [
  {
    label: "Blog",
    desc: "Insights on AI, marketing and growth",
    icon: BookOpen,
    href: "/blog"
  },
  {
    label: "AI Tools",
    desc: "Curated AI tools for productivity",
    icon: Bot,
    href: "/ai-tools"
  },
  {
    label: "Case Studies",
    desc: "Real results and success stories",
    icon: Briefcase,
    href: "/case-studies"
  }
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Shrink Effect */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Topbar */}

      <div className="bg-topbar text-topbar-foreground text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

          <p className="hidden md:block italic opacity-80">
            Learn as if you will live forever, live like you will die tomorrow.
          </p>

          <div className="flex items-center gap-4 ml-auto">

            <a
              href="mailto:dm@pawantripathi.in"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Mail className="h-3 w-3"/>
              dm@pawantripathi.in
            </a>

            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3"/>
              +91 9815064617
            </span>

            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="h-3 w-3"/>
              Indore, India
            </span>

          </div>

        </div>
      </div>

      {/* Main Navbar */}

      <nav
        className={`transition-all duration-300 border-b border-border
        ${scrolled
          ? "bg-background/80 backdrop-blur-xl py-2 shadow-md"
          : "bg-background/60 backdrop-blur-lg py-4"
        }`}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* Logo */}

          <NavLink to="/">
            <img
              src="https://pawantripathi.in/wp-content/uploads/2024/07/Pawan-Tripathi-2.gif"
              alt="Pawan Tripathi"
              className="h-12"
            />
          </NavLink>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (

              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`
                }
              >

                {({ isActive }) => (
                  <>
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}

                  </>
                )}

              </NavLink>

            ))}

            {/* Resources Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >

              <span className="cursor-pointer text-sm font-medium text-foreground/70 hover:text-primary">
                Resources
              </span>

              <AnimatePresence>

                {dropdown && (

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-background border border-border shadow-xl rounded-xl p-6 w-[440px]"
                  >

                    <div className="grid grid-cols-1 gap-4">

                      {resources.map((item) => (

                        <NavLink
                          key={item.href}
                          to={item.href}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition"
                        >

                          <item.icon className="h-5 w-5 text-primary mt-1"/>

                          <div>
                            <p className="font-medium text-sm">
                              {item.label}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              {item.desc}
                            </p>
                          </div>

                        </NavLink>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            {/* CTA Button */}

            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full px-6 hover:scale-105 transition">
              Book Consultation
            </Button>

          </div>

          {/* Mobile Toggle */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X/> : <Menu/>}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-border bg-background"
            >

              <div className="px-4 py-4 space-y-3">

                {navLinks.map((link) => (

                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium hover:text-primary"
                  >
                    {link.label}
                  </NavLink>

                ))}

                <p className="font-semibold text-sm pt-2">
                  Resources
                </p>

                {resources.map((item) => (

                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm py-2 pl-3 hover:text-primary"
                  >
                    {item.label}
                  </NavLink>

                ))}

                <Button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full">
                  Book Consultation
                </Button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>

    </header>
  );
};

export default Navbar;