import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/Index'
import NewArrivalsPage from './pages/New Arrivals/Index'
import Kids from './pages/Kids/Index'
import MenPage from './pages/Men/Index'
import WomenPage from './pages/Women/Index'
import Navbar from './components/Layout/Navbar'
import About from './pages/Info/AboutUs'
import Cart from './pages/Product/Cart'
import Login from './pages/Auth/Login'
import Careers from './pages/Info/Careers'
import SingleProductPage from './pages/Product/SinglePage'
import Faqs from './pages/Info/faqs'
import BulkPurchases from './pages/Info/BulkPurchases'
import ReturnExchange from './pages/Info/ReturnEchange'
import TrackOrder from './pages/Auth/TrackYourOrder'
import Footer from './components/Layout/Footer'
import ScrollToTop from './Utilities/ScrolltoTop'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newarrivals' element={<NewArrivalsPage/>}></Route>
        <Route path='/men' element={<MenPage/>}></Route>
        <Route path='/women' element={<WomenPage/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singlepage' element={<SingleProductPage/>}></Route>
        <Route path='/return' element={<ReturnExchange/>}></Route>
        <Route path='/trackorder' element={<TrackOrder/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/bulk-purchases" element={<BulkPurchases />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App