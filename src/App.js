import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import './App.scss';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/books-library-app" element={<Home />}/>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
