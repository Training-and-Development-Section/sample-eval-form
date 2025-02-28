import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Home from './Pages/Home';
import DemographicPage from './Pages/Section1/DemographicPage';

const App = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section1-demographic" element={<DemographicPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;