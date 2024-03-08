import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/products/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    {/* <Navigate to='/' /> */}
    <Footer/>
    
    </>
  );
}

export default App;
