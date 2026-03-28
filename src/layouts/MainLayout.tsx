import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import { useModal } from "@/context/ModalContext";

const MainLayout = () => {
  const { isOpen, setIsOpen } = useModal();

  return (
    <>
      {/* Route change par top pe jao */}
      <ScrollToTop />

      <Navbar />

      <main className="pt-[90px] min-h-screen">
        <Outlet />
      </main>

      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/919815064617"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      {/* Back to Top */}
      <BackToTop />
    </>
  );
};

export default MainLayout;