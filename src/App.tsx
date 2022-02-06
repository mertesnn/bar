import React from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Drinks from './Pages/Drinks';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Box,
  Center
} from '@chakra-ui/react';

const App = () => {
  return (
    <BrowserRouter>

      <Box bg='tomato' w='100%' p={4} color='white'>
        <nav>
          <Center>
            <Link to="/">Home</Link>
            <Link to="/drinks">Drinks</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Center>
        </nav>
      </Box>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/drinks' element={<Drinks />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;