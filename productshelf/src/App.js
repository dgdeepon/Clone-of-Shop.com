import './App.css';
import './Components/FontAwsome'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
