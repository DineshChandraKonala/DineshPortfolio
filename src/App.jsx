import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/heroMain';
import HeroGradient from './components/heroSection/heroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillSection/SkillsMain';
import SubSkills from './components/skillSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/projectMain';
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterSection from "./components/footerSection/FooterMain"
function App() {
  return (
    <main className='font-body'>
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
        <AboutMeMain/>
        <SkillsMain/>
        <SubSkills/>
        <ExperienceMain/>
        <ProjectMain/>
        <ContactMeMain/>
        <FooterSection/>
    </main>
  )
}

export default App
