import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './Routes/AppRoutes';

function App() {
  return (
    <div className='container'>
       <ToastContainer />
       <AppRoutes/>
    </div>
  );
}

export default App;
