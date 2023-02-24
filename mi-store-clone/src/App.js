import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router,Route , Routes} from "react-router-dom"
import Slider from "./components/Slider.js"
import * as datas from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProducts from "./components/StarProducts.js"
import HotAccesoriesMenu  from "./components/HotAccesoriesMenu.js"
import HotAccessories from "./components/HotAccesories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"

let data=datas;


function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text='STAR PRODUCTS'/>
      <StarProducts starProduct={data.starProduct} />
      <Heading text='HOT ACCESSORIES'/>
      <HotAccesoriesMenu />

    <Routes>
    <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>
    </Route>

    <Route exact path='/smartDevices' element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice} />}>
    </Route>
    <Route exact path='/home' element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />}>
    </Route>
    <Route exact path='/lifestyle' element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />}>
    </Route>
    <Route exact path='/mobileAccessories' element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />}>
    </Route>

    </Routes>
    <Heading text="PRODUCT REVIEWS"/>

       <ProductReviews productReviews={data.productReviews}/>

       <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
