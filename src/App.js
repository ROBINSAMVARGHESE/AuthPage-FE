// src/App.js
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignupPage from './Component/Pages/SignupPage';
import LoginPage from './Component/Pages/Login';
import HomePage from './Component/Pages/HomePagesjs';
import ProtectedRoute from './Component/PrivateRoute';
import Navbardesign from './Component/Navbar';
;

function App() {
  return (
    <BrowserRouter>
      <Navbardesign/>
      <Routes>
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home"  element={ <ProtectedRoute><HomePage/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
