
import './App.css';
import Navb from './components/Navbar';
import Dashboard from "./components/Dashboard";
import Post from './components/Post';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App">
      <Navb/>
      <br/>
      <br/>
      
      <Dashboard/>
      <br/>
      <br/>
      <Feed/>
      <Post/>
      <Post/>
    </div>
  );
}

export default App;
