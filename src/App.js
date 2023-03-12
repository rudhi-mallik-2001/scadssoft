import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Component from './Components/Component';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Career from './Components/Career/Career';
import About from './Components/About/AboutUs';
import Industries from './Components/Industries/Industries';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Component />} />
          <Route path={'/home'} element={<Component />}/>
          <Route path={'/products'} element={<Products />} />
          <Route path={'/career'} element={<Career />} />
          <Route path={'/aboutus'} element={<About />} />
          <Route path={'/industries'} element={<Industries />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
