import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, BookOpen, Bot, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Consulting", href: "/consulting" },
  { label: "Training",   href: "/training" },
];

const resources = [
  { label: "Blog",         desc: "Insights on AI, marketing and growth", icon: BookOpen, href: "/blog" },
  { label: "AI Tools",     desc: "Curated AI tools for productivity",     icon: Bot,      href: "/ai-tools" },
  { label: "Case Studies", desc: "Real results and success stories",      icon: Briefcase,href: "/case-studies" },
];

// ✅ NavbarProps type REMOVE kiya — onOpen prop nahi chahiye ab
const Navbar = () => {
  const { setIsOpen } = useModal(); // ✅ Global modal
  const [open, setOpen]         = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* TOPBAR */}
      <div className="bg-[#0B2C5F] text-white text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <p className="hidden md:block italic text-white/70">
            Learn as if you will live forever, live like you will die tomorrow.
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a href="mailto:dm@pawantripathi.in" className="flex items-center gap-1 hover:text-white/80 transition">
              <Mail className="h-3 w-3" /> dm@pawantripathi.in
            </a>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> +91 9815064617
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Indore, India
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`transition-all duration-300 border-b border-[#E2E8F0] ${
        scrolled ? "bg-white py-2 shadow-md" : "bg-white py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <NavLink to="/">
            <img
              src="https://pawantripathi.in/wp-content/uploads/2024/07/Pawan-Tripathi-2.gif"
              alt="Pawan Tripathi"
              className="h-12"
            />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive ? "text-[#1E5EFF]" : "text-[#0F172A]/70 hover:text-[#1E5EFF]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#1E5EFF] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <span className="cursor-pointer text-sm font-medium text-[#0F172A]/70 hover:text-[#1E5EFF] transition-colors">
                Resources
              </span>
              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-white border border-[#E2E8F0] shadow-xl rounded-xl p-6 w-[440px]"
                  >
                    <div className="grid gap-3">
                      {resources.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className="flex gap-4 p-3 rounded-lg hover:bg-[#F4F7FB] transition"
                        >
                          <item.icon className="h-5 w-5 text-[#1E5EFF] mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm text-[#0F172A]">{item.label}</p>
                            <p className="text-xs text-[#6B7280]">{item.desc}</p>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-[#0B2C5F] text-white rounded-full px-6 hover:bg-[#1E5EFF] hover:scale-105 transition-all duration-200 font-semibold"
            >
              Book Consultation
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-[#0F172A]" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[#E2E8F0] bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 rounded-lg text-sm font-medium transition ${
                        isActive
                          ? "bg-[#F4F7FB] text-[#1E5EFF]"
                          : "text-[#0F172A]/70 hover:bg-[#F4F7FB] hover:text-[#1E5EFF]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <p className="font-semibold text-sm pt-3 px-3 text-[#0F172A]">Resources</p>
                {resources.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-sm py-2.5 px-3 rounded-lg text-[#0F172A]/70 hover:bg-[#F4F7FB] hover:text-[#1E5EFF] transition"
                  >
                    <item.icon className="h-4 w-4" /> {item.label}
                  </NavLink>
                ))}

                <Button
                  onClick={() => { setOpen(false); setIsOpen(true); }}
                  className="w-full mt-3 bg-[#0B2C5F] text-white rounded-full hover:bg-[#1E5EFF] transition font-semibold"
                >
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