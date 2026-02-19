import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import New from './pages/New Arrivals'
import Kids from './pages/Kids'
import Man from './pages/Man'
import Woman from './pages/Woman'
import Navbar from './components/Navbar'
import About from './pages/AboutUs'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Careers from './pages/Careers'
import SinglePage from './pages/SinglePage'
import Faqs from './pages/faqs'
import BulkPurchases from './pages/BulkPurchases'
import ReturnExchange from './pages/ReturnEchange'
import TrackOrder from './pages/TrackYourOrder'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newarrivals' element={<New/>}></Route>
        <Route path='/man' element={<Man/>}></Route>
        <Route path='/woman' element={<Woman/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singlepage' element={<SinglePage/>}></Route>
        <Route path='/return' element={<ReturnExchange/>}></Route>
        <Route path='/trackorder' element={<TrackOrder/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/bulk-purchases" element={<BulkPurchases />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App