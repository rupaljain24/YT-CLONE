import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Videos from "./Videos/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Search/Search";
import Videoplayer from "./Videoplayer/Videoplayer";
import VideoplayerScreen from "./Videoplayer/VideoplayerScreen";

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
        <Routes>
          <Route path="/video/:videoId" element={
          <div className="app__main">
              <Sidebar />
              <VideoplayerScreen/>
              {/* <Videoplayer/> */}
            </div>}> 
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
