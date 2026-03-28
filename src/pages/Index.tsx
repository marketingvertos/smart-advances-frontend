import HeroSection from "@/components/HeroSection";
import AIMarketingSolutions from "@/components/AIMarketingSolutions";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import EducationSection from "@/components/EducationSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContentHubSection from "@/components/ContentHubSection";
import LeadGenerationSection from "@/components/LeadGenerationSection";
import AdvancedFeaturesSection from "@/components/AdvancedFeaturesSection";
import GallerySection from "@/components/GallerySection";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      {/* Theme Toggle */}
      <ThemeSwitcher />

      {/* HERO */}
      <HeroSection />

      {/* AI MARKETING SOLUTIONS */}
      <AIMarketingSolutions />

      {/* SERVICES */}
      <ServicesSection />

      {/* TECH STACK */}
      <TechStackSection />

      {/* EDUCATION / TRAINING */}
      <EducationSection />

      {/* CASE STUDIES */}
      <CaseStudiesSection />

      {/* BLOG / CONTENT HUB */}
      <ContentHubSection />

      {/* LEAD FUNNEL */}
      <LeadGenerationSection />

      {/* ADVANCED FEATURES */}
      <AdvancedFeaturesSection />

      {/* GALLERY */}
      <GallerySection />

    </div>
  );
};

export default Index;