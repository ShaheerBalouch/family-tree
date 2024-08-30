import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './LoginPage';



function App() {

  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
