import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import HowFyloWorks from "./components/HowFyloWorksSection";
import ReviewsSection from "./components/ReviewsSection"
import SignUpSection from "./components/SignUpSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return <div className="bg-[url('../public/images/bg-curvy-mobile.svg')]
                        md:bg-[url('../public/images/bg-curvy-desktop.svg')]
                        bg-no-repeat bg-center bg-contain min-h-screen w-screen
                        bg-[hsl(217,28%,15%)] flex flex-col gap-32">
    <HeaderSection />
    <HeroSection />
    <ServicesSection />
    <HowFyloWorks />
    <ReviewsSection />
    <SignUpSection />
    <FooterSection />
  </div>
}

export default App;