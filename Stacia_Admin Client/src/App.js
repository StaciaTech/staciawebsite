import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import AddService from './pages/AddService';
import AllUsers from './pages/AllUsers';
import UserProfile from './pages/UserProfile';

import Product from './pages/Product';
import Projects from './pages/Projects';
import Casestudy from './pages/Casestudy';
import Careers from './pages/Careers';
import Staciawall from './pages/Staciawall';
import Page404 from './pages/Page404';
import Article from './pages/Article';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addservice' element={<AddService />} />
        <Route path='/users' element={<AllUsers />} />

        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/article' element={<Article />} />
        <Route path='/products' element={<Product />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/career' element={<Careers />} />
        <Route path='/casestudy' element={<Casestudy />} />
        <Route path='/staciawall' element={<Staciawall />} />
        <Route path='/*' element={<Page404 />} />

      </Routes>
    </>
  );
}

export default App;
