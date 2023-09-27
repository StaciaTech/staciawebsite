import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import AddService from './pages/AddService';
import AllUsers from './pages/AllUsers';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/addservice' element={<AddService />} />
        <Route path='/users' element={<AllUsers />} />
        <Route path='/userProfile' element={<UserProfile/>}/>
      </Routes>
    </>
  );
}

export default App;
