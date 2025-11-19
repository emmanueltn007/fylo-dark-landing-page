import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  return <div className="bg-[url('../public/images/bg-curvy-mobile.svg')]
                        md:bg-[url('../public/images/bg-curvy-desktop.svg')]
                        bg-no-repeat bg-center bg-contain min-h-screen w-screen
                        bg-[hsl(217,28%,15%)]">
    <HeaderSection />
    <HeroSection />
    <ServicesSection />
  </div>
}

export default App;