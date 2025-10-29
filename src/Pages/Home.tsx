
import Heading from '@/components/Heading'
import FAQ from '../components/FAQ'
import SmallInfo from '@/components/SmallInfo'
import ComponentWithImage from '../components/HowItsWork'
import Feedback from '../components/Feedback'
import Info from '../components/Info'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'



function Home() {
  return (
    <div className='w-full'>
      <HeroSection />
      <Heading />
      
    
     
     <ComponentWithImage />
    
     <Feedback />
      <FAQ />
     <Info />
     
   
    </div>
  )
}

export default Home