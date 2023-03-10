import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path={'/'} element={ <Home/>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
