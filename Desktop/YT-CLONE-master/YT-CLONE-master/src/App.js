import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Videos from "./Videos/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search/Search";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
        <Route path="/" element={
          <div className="app__main">
              <Sidebar />
              <Videos />
            </div>}>   
          </Route>
          </Routes>
          <Routes>
          <Route path="/search/:term" element={
          <div className="app__main">
              <Sidebar />
              <Search/>
            </div>}> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
