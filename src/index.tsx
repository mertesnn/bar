import Drinks from './Pages/Drinks';
import SingleDrink from './Pages/SingleDrink';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import ErrorPage from './Pages/404';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='drinks' element={<Drinks />} />
            <Route path='drinks/:drinkId' element={<SingleDrink />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode >,
  rootElement
);

reportWebVitals();