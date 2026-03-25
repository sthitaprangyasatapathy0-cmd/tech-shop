import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Wishlist } from './pages/Wishlist'

import { Login } from './pages/login'
import { DeskSetup } from './pages/DeskSetup'
import { StudyEssentials } from './pages/StudyEssentials'
import { LaptopMobile } from './pages/Laptop&Mobile'
import { Stickers } from './pages/Stickers & Posters'
import logo from './assets/logo.png'
import { ProductDetails } from './pages/ProductDetails'
import { shopContext } from './main'
import { RequiredAuth } from './components/requiredAuth'
import { Address } from './pages/adress'
import data from './Database/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

import { FaLocationDot } from "react-icons/fa6";
import { AllCatagory } from './pages/allcatagory'
import OrderSuccessPage from './pages/ordercomplte'




function App() {
  const [count, setCount] = useState(0)
  const [serchData, SetserchData] = useState()
  const { islog } = useContext(shopContext)
  // function findData(op){
  //   SetserchData( data.filter(opt=>opt.title. toLowerCase().includes(op.toLowerCase())))

  // }

  return (
    <>




      <nav className='navbar'>
        <div>
          <Link className='brandname' to='/'>  Sħøᵽɨx</Link>
        </div>

        <div className='searchBox'>
          <input className='searchInput' type="text" onChange={(e) => SetserchData(e.target.value)} />
          {/*<Link to='/login'>Login </Link>*/}

               <div className='searchResults'>
            {serchData && data.filter(item =>
              item.title.toLowerCase().includes(serchData.toLowerCase())
            ).map((ok, index) => (
              <Link key={ok.id} to={`/detiles/${ok.id}`}>
                <div className='search-cat'>
                  <div>
                    <img className="img-serch" src={ok.image} alt="" />
                  </div>

                  <div  className='serchinfo'>
                    <span className='brand'>{ok.brand}   </span>
                    <span className='searchPrice'>₹{ok.price}</span>



                  </div>
                  {/* <div className='titl'>{ok.title}</div> */}




                </div>


              </Link>
            ))}


          </div>

        </div>
        <div >
          <Link to='/allproducts' className='allname' >All Products</Link>
          <Link to='/wishlist' className='cartlogo' > <BsFillHeartFill /></Link>
          <Link to='/adress' className='cartlogo'> <FaLocationDot /></Link>
          <Link to='/cart' className='cartlogo' ><FaShoppingCart /></Link>







        </div>

      </nav>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<RequiredAuth>< Cart /> </RequiredAuth>} />

        <Route path='/wishlist' element={<RequiredAuth><Wishlist /> </RequiredAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/CodingDeskSetup' element={<DeskSetup />} />
        <Route path='/StudyEssentials' element={<StudyEssentials />} />
        <Route path='/LaptopMobileAccessories' element={<LaptopMobile />} />
        <Route path='/StickersPosters' element={<Stickers />} />
        <Route path='/detiles/:id' element={<ProductDetails />} />
        <Route path='/adress' element={<Address />} />
        <Route path='/allProducts' element={<AllCatagory />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />





      </Routes>








    </>
  )
}

export default App
