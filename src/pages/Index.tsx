
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

const Index = () => (
  <div className="min-h-screen bg-background">
    
    <ThemeSwitcher />
    <HeroSection />
    <AIMarketingSolutions />
  
    <ServicesSection />
    <TechStackSection />
    <EducationSection />
    <CaseStudiesSection />
    <ContentHubSection />
    <LeadGenerationSection />
    <AdvancedFeaturesSection />
    <GallerySection />

    
  </div>
);

export default Index;
