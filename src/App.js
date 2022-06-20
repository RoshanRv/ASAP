import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'

import AdminLogin from "./Components/AdminLogin";
import RequestPage from "./Components/RequestPage";
import RequestDetails from "./Components/RequestDetails";
import AdminSettings from "./Components/AdminSettings";
import Home from './Components/Home/Home';
import Home2 from './Components/Home/Home2';
import CustomCursor from './Components/CustomCursor';

function App() {
  return (
    <>
    <CustomCursor/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/2' element={<Home2/>} />
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
