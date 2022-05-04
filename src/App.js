import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Videos from './Videos/Videos';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      <div className='app__main'>
        <Sidebar/>
        <Videos/>
      </div>
      {/* Sidebar */}
      {/* MainBody */}
    </div>
  );
}

export default App;
