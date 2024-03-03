import React, { useState } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { AddUser} from './users/AddUser';
import { EditUser } from './users/EditUser';
import { ToggleButton } from './UI/ToggleButton';

function App() {
  const [toggle, setToggle] = useState(true);
console.log(toggle, 'toggle')
  const toggleLightMode = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`App ${toggle ? 'toggle text-dark' : ''}`}>
      <Router>
        <Navbar />
        <ToggleButton animation={toggle} toggleLightMode={toggleLightMode} />
        <h2>Let's get started</h2>
        <Routes>
          <Route exact path="/" element={<Home text_color={toggle}/>} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
