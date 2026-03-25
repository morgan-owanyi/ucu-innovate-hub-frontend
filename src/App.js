import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SubmitInnovation from './pages/SubmitInnovation';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitInnovation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
} 

export default App;


/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Home Page Works!</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

/*import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Router is working</h1>
    </BrowserRouter>
  );
}

export default App*/