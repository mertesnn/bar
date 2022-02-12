import Nav from './Companents/Nav';
import Footer from './Companents/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;