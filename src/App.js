import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import AdminLogin from "./Components/AdminLogin";
import RequestPage from "./Components/RequestPage";
import RequestDetails from "./Components/RequestDetails";
import AdminSettings from "./Components/AdminSettings";
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> 
    </Router>
    </>
    // <AdminLogin />     
    // <RequestPage /> 
    // <AdminSettings />
    // <RequestDetails/>
  );
}

export default App;
