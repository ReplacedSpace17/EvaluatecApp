import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Views/Home/Home';
import Register from './Views/Register/Register';
import InfoApp from './Views/InfoApp/InfoApp';
import LoginScreen from './Views/Login/Login';

const App = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<InfoApp />} />
        <Route path="/Home" element={<Home />} />  
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Login" element={<LoginScreen />} />
        {/* Ruta por defecto en caso de página no encontrada */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  </Router>
);

export default App;
