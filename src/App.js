import "./style/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Search from "./pages/Search";
import User from "./pages/User";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
