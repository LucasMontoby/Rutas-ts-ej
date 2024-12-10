import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './NavBar';
import Rutas from './Rutas';


const App: React.FC = () => {
  return (
 <Router>
  
  <Navbar />
  <Rutas />

 </Router>
  );
}

export default App;
