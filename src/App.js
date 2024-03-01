import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { AddUser} from './users/AddUser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
      <Navbar />
     <h2>Let's get started</h2>
     <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/AddUser" element={<AddUser />}/>
     </Routes>
        </div>
      </Router>
  );
}

export default App;
