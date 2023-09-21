import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Pages/LandingPage';
import { AnimatePresence } from 'framer-motion';
import LoginPage from './Pages/LoginPage';
import GalleryPage from './Pages/GalleryPage';

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className=''>
        <Header />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.key}>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/gallery' element={<GalleryPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

