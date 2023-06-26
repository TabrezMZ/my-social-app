import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Features/SignUp';
import { Login } from './Features/Login';
import { Navbar } from './components/NavBar';
import { Sidebar } from './components/SideBar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Explore } from './pages/Explore';
import { Bookmark } from './pages/BookMark';
import { Posts } from './Features/Posts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LikedPost } from './pages/LikedPost';

function App() {
  return (
    <div className='container'>
       <ToastContainer />
     { true && <Navbar/>}
      <Routes>
        <Route path='/signup' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/explore' element={<Explore/>}  />
        <Route path='/bookmark' element={<Bookmark/>}  />
        <Route path='/likes' element={<LikedPost/>}  />
        <Route path='/posts' element={<Posts/>}  />
        <Route path='/profile' element={<Profile/>}  />
      </Routes>
      { true && <Sidebar/>}
    </div>
  );
}

export default App;
