import Blogs from '@/components/Home/Blogs'
import Faqs from '@/components/Home/Faqs'
import Featured from '@/components/Home/Featured'
import Hero from '@/components/Home/Hero'
import LogoSlider from '@/components/Home/LogoSlider'
import Points4 from '@/components/Home/Points4'
import Services from '@/components/Home/Services'
import Testimonials from '@/components/Home/Testimonials'
import Work from '@/components/Home/Work'

const Main = () => {
  return (
    <div>
        <Hero />
        <LogoSlider />
        <Featured />
        <Work />
        <Services />
        {/* <Points4 /> */}
        <Testimonials/>
        {/* <Faqs /> */}
        <Blogs />
    </div>
  )
}

export default Main