import './App.css';
import Navbar from './Header/navbar';
import LandingPage from './HomePage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="App">
          <Navbar />
          <LandingPage />
      </div>
  );
}
export default App;