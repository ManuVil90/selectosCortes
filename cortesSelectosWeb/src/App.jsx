import {Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import TestimonialPage from "./pages/TestimonialPage"
import AboutPage from './pages/AboutPage'

import FaqComponent from "./components/FaqComponent"
import FooterComponent from "./components/FooterComponent"
import NavbarComponent from "./components/NavbarComponent"
import ProductsPage from './pages/ProductsPage'
import WhatsAppComponent from './components/WhatsAppcomponent'

function App() {
  
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path="/products" Component={ProductsPage}/>
      </Routes>
      <WhatsAppComponent/>
      <FooterComponent />
    </div>
  )
}

export default App
