
import HeroSection from "@/components/home/HeroSection";
import ProfessionsSection from "@/components/home/ProfessionsSection";
import WhyCatsSection from "@/components/home/WhyCatsSection";
import CatTermsSection from "@/components/home/CatTermsSection";
import PodcastSection from "@/components/home/PodcastSection";
import FaqSection from "@/components/home/FaqSection";
import HireSection from "@/components/home/HireSection";
import Footer from "@/components/home/Footer";

/**
 * Главная страница сайта
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E1] font-rubik">
      {/* Hero Section */}
      <HeroSection />

      {/* Professions Section */}
      <ProfessionsSection />

      {/* Why Cats Section */}
      <WhyCatsSection />

      {/* Cat Terms Section */}
      <CatTermsSection />

      {/* Podcasts Section */}
      <PodcastSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Hire a Cat Form */}
      <HireSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
