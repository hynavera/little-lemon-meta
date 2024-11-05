import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Reserve from './components/Reservation/Reserve';
import Contact from './components/Reservation/Contact';
import Review from './components/Reservation/Review';
import ReserveLayout from './components/Reservation/ReserveLayout';
import Deposit from './components/Reservation/Deposit';
import Congrats from './components/Reservation/Congrats';
import About from './components/Pages/About';
import Menu from './components/Pages/Menu';
import Page from './components/Pages/Page';
import "./server";
import DishDetail from './components/Pages/DishDetail';

function App() {
  return (
    <BrowserRouter basename='/little-lemon-meta'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservations' element={<ReserveLayout/>}>
          <Route index element={<Reserve/>} />
          <Route path='/reservations/2' element={<Contact />}/>
          <Route path='/reservations/3' element={<Review />}/>
          <Route path='/reservations/4' element={<Deposit />}/>
        </Route>
        <Route path='/success' element={<Congrats/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='menu/:id' element={<DishDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
