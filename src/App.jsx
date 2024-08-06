import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import { useState } from 'react';
import SearchPage from './Pages/SearchPage';
import ProductBuyPage from './Pages/ProductBuyPage';
import ContactPage from './Pages/ContactPage';
import PaymentPage from './Pages/PaymentPage';
import PaymentReceipt from './Pages/PaymentReceipt';

const App = () => {
  const [store, setStore] = useState([]);
  const [item, setItem] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = (product) => {
    setStore([...store, product]);
    setItem(item + 1);
    setShowMessage(true);
    setTimeout(()=>{
      setShowMessage(false);
    }, 4000);
  }


const handleRemoveItem = (index) => {
    const newStore = store.filter((_, i)=> i !== index)
    setStore(newStore);
    setItem(item-1);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home item={item}/>}/>
        <Route path='/product' element={<ProductPage item={item} handleAddToCart={handleAddToCart} showMessage={showMessage}/>}/>
        <Route path='/signin' element={<SignIn item={item}/>}/>
        <Route path='/cart' element={<CartPage store={store} item={item} handleRemoveItem={handleRemoveItem}/>}/>
        <Route path='/search' element={<SearchPage handleAddToCart={handleAddToCart} item={item}/>}/>
        <Route path='/productbuy' element={<ProductBuyPage item={item}/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/receipt' element={<PaymentReceipt/>}/>
      </Routes>
    </>
  )
}

export default App;