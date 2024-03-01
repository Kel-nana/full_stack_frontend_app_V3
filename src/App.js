import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
     <h2>Let's get started</h2>
     <Home />
    </div>
  );
}

export default App;
