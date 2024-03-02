import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { AddUser} from './users/AddUser';
import { EditUser } from './users/EditUser';


function App() {
  return (
        <div className="App">
    <Router>
      <Navbar />
     <h2>Let's get started</h2>
     <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/addUser" element={<AddUser />}/>
        <Route exact path ="/editUser/:id" element={<EditUser />}/>
     </Routes>
      </Router>
        </div>
  );
}

export default App;
