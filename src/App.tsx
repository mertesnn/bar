import Nav from './Companents/Nav';
import Footer from './Companents/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import SingleDrink from './Pages/SingleDrink';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/404';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/drinks' element={<Drinks />} />
            <Route path='/drinks/:drinkId' element={<SingleDrink />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;