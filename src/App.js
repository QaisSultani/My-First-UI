import Navbar from './components/navbar/Navbar'
import FirstLook from './components/first_look/FirstLook'
import ZIndexImage from './components/z_index/ZIndexImage'
import Intro from './components/introduction/Intro'
import LearnMore from './components/learn_more/LearnMore'
import OurShop from './components/our_shop/OurShop'
import Images from './components/images/Images'
import ImageWithText from './components/image_with_text/ImageWithText'
import Carousel from './components/carousel/Carousel'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'
import Reviews from './components/reviews/Reviews'
import Carousel1 from './components/carousel1/Carousel1'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Carousel1 /> */}
      <FirstLook />
      <Intro />
      <LearnMore />
      <ZIndexImage />
      <OurShop />
      <Carousel />
      <Reviews />
      <Images />
      <ImageWithText />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
