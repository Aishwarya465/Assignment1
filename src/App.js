

import './App.css';
import Mail from './Mail'
import Navbar from './Navbar'
// import {Route, Router, Routes} from 'react-router-dom';

function App() {
  return (
   <div>
     <Navbar />
      <Mail /> 

     {/* <Router>
      <Routes>
        <Route path='/'>
        <Mail />
        </Route>
      </Routes>
    </Router>  */}
    
   </div>
   ); 
}

export default App;
