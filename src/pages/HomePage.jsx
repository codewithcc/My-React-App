import Header from '../components/Header'
import HeroSection from '../layouts/HeroSection'
import ServiceSection from '../layouts/ServiceSection'
import ProjectsSection from '../layouts/ProjectsSection'
import AboutMeSection from '../layouts/AbotMeSection'
import Footer from '../components/Footer'

const HomePage = () => {
    return(
        <>
            <Header/>
            <HeroSection/>
            <ServiceSection/>
            <ProjectsSection/>
            <AboutMeSection/>
            <Footer/>
        </>
    )
}

export default HomePage