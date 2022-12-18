import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Category from './pages/Category';
import SignUp from './pages/SignUp';
import Navbar from './component/Navbar';
import PrivateFile from './component/PrivateFile';

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>} />
        <Route path='/offers' element={<Offers/>} />
        <Route path='/category/:categoryName' element={<Category/>} />
        <Route path='profile' element={<PrivateFile />} >
          <Route path='/profile' element={<Profile/>} />
        </Route>
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
      </Routes>
      <Navbar/>
    </Router>
  </>
  );
}

export default App;
