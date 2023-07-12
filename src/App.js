import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.css';
import { AppRoutes } from './Routes/AppRoutes';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { darkMode } = useAuth()
  return (
    <div className='container'>
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
