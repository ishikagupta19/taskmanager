
import './App.css';
import Navb from './components/Navbar';
import Dashboard from "./components/Dashboard";
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Dashboard/>
      <Post/>
    </div>
  );
}

export default App;
