import './App.css';
import Home from './components/Home'
import Cart from './components/Cart'
import {CartProvider} from 'react-use-cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <CartProvider>
     <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<Home></Home>}/>
      <Route path='/cart' element={<Cart></Cart>}/>
     </Routes>
     </BrowserRouter> 
    
   
    </CartProvider>
  );
}

export default App;
