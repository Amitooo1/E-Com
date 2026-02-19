
import BestSellers from '../components/BestSellers'
import Features from '../components/Features'
import Footer from '../components/Footer'
import NewArrivals from '../components/NewArrivals'
import ShopByCategory from '../components/ShopByCategory'
import ShopByGender from '../components/ShopByGender'
import IgReels from './IgReels'
import HeroSlider from './Slide'
import Offers from '../components/Offers'
import FeaturedCollection from '../components/Featured'
const Home = () => {
  return (
    
    <div className='pt-16'>
        <HeroSlider/>
        <div className='bg-linear-to-b from-orange-50 to-gray-50 py-10'>
          <Offers/>
          <NewArrivals />
        </div>
        <BestSellers />
        <div className='bg-linear-to-b from-gray-200 to-gray-50'>
          <ShopByGender />
          <ShopByCategory />
        </div>
        <FeaturedCollection/>
        <IgReels/>
        <Features />
        <Footer />
    </div>
    
  )
}

export default Home