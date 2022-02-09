import About from './Pages/About';
import Contact from './Pages/Contact';
import Drinks from './Pages/Drinks';
import Nav from './Companents/Nav';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './Companents/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/drinks' element={<Drinks />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;