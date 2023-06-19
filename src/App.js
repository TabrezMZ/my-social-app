import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './Features/SignUp';
import { Login } from './Features/Login';
import { Navbar } from './components/NavBar';
import { Sidebar } from './components/SideBar';
import { Home } from './Features/Home';
import { Profile } from './Features/Profile';
import { Explore } from './Features/Explore';
import { Bookmark } from './Features/BookMark';
import { Posts } from './Features/Posts';

function App() {
  return (
    <div className='container'>
     { true && <Navbar/>}
      <Routes>
        <Route path='/signup' element={<SignUp/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/explore' element={<Explore/>}  />
        <Route path='/bookmark' element={<Bookmark/>}  />
        <Route path='/posts' element={<Posts/>}  />
        <Route path='/profile' element={<Profile/>}  />
      </Routes>
      { true && <Sidebar/>}
    </div>
  );
}

export default App;
