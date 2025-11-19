import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import HowFyloWorks from "./components/HowFyloWorksSection";
import ReviewsSection from "./components/ReviewsSection"
import SignUpSection from "./components/SignUpSection";

const App = () => {
  return <div className="bg-[url('../public/images/bg-curvy-mobile.svg')]
                        md:bg-[url('../public/images/bg-curvy-desktop.svg')]
                        bg-no-repeat bg-center bg-contain min-h-screen w-screen
                        bg-[hsl(217,28%,15%)]">
    <HeaderSection />
    <HeroSection />
    <ServicesSection />
    <HowFyloWorks />
    <ReviewsSection />
    <SignUpSection />
  </div>
}

export default App;