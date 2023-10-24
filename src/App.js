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
import Blog from './pages/Blog';
import Signup from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='store' element={<Store/>}></Route>
            <Route path='product/:id' element={<SingleProductPage/>}></Route>
            <Route path='wishlist' element={<Wishlist/>}></Route>
            <Route path='forgot-password' element={<ForgotPass/>}></Route>
            <Route path='login' element={ <Login/> }></Route>
            <Route path='blogs' element={<Blog/>}></Route>
            <Route path='blog/:id' element={<SingleBlog/>}></Route>
            <Route path='donate-product' element={ <DonateProduct/> } ></Route>
            <Route path='signup' element={ <Signup/> }></Route>
            <Route path='reset-password' element={ <ResetPassword/> }></Route>
            <Route path='privacy-policy' element={<PrivacyPolicy/>} ></Route>
            <Route path='shipping-policy' element={<ShippingPolicy/>} ></Route>
            <Route path='refurn-policy' element={<RefundPolicy/>} ></Route>
            <Route path='term-and-conditions-policy' element={ <TermsAndConditions/> } ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
