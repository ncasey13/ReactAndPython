import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
