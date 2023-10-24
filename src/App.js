import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Store from './pages/Store';
import Wishlist from './pages/Wishlist';
import ForgotPass from './pages/ForgetPass';
import DonateProduct from './pages/DonateProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/store' element={<Store/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/forgot-password' element={<ForgotPass/>}></Route>
            <Route path='/login' element={ <Login/> }></Route>
            <Route path='/donate-product' element={ <DonateProduct/> } ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
